# Event Resilience

Event Resilience is an NPM package designed to provide event resilience functionality in AdonisJS applications. It implements the **Inbox** and **Outbox** message patterns to ensure reliable storage and dispatching of events, making your application resilient to failures and ensuring event consistency.

---

## Features

- **Inbox Pattern**: Stores incoming events to ensure idempotency and prevent duplicate processing.
- **Outbox Pattern**: Queues outgoing events for guaranteed dispatch even in case of transient errors.
- **Event Persistence**: Events are stored in a database for reliability and retry mechanisms.
- **AdonisJS Integration**: Seamless integration with AdonisJS v6 using Lucid models and migrations.

---

## Installation

Install the package using npm:

```bash
npm install event-resilience
```

Or with yarn:

```bash
yarn add event-resilience
```

---

## Setup

### 1. Configure the Package
Run the configuration command to set up the required environment variables and migrations:

```bash
node ace configure event-resilience
```

This command will:
- Add environment variables to your `.env` file.
- Update your AdonisJS project configuration.
- Publish the necessary migrations to your project.

### 2. Run Migrations
After configuring the package, run the migrations to create the required tables in your database:

```bash
node ace migration:run
```

---

## Usage

### Inbox Pattern

### Outbox Pattern

### Event Retrying

---

## Environment Variables

```env
```

---

## Migrations
The package includes the following migrations:

1. **Inbox Table**: Stores incoming events.
2. **Outbox Table**: Stores outgoing events awaiting dispatch.

These migrations are automatically published to your project during the configuration step.

---

## Testing

Run tests to ensure the package is working correctly:

```bash
npm run test
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

---

## Support

If you encounter any issues or have questions, please [open an issue on GitHub](https://github.com/rolmen26/event-resilience/issues).

