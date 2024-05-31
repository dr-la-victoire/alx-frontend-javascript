const guardrail = (mathFunction) => {
  const queue = [];

  try {
    const funcValue = mathFunction();
    queue.push(funcValue);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
};

export default guardrail;
