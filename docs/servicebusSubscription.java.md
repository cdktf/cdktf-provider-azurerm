# `servicebusSubscription` Submodule <a name="`servicebusSubscription` Submodule" id="@cdktf/provider-azurerm.servicebusSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusSubscription <a name="ServicebusSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription azurerm_servicebus_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscription;

ServicebusSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .maxDeliveryCount(java.lang.Number)
    .name(java.lang.String)
    .topicId(java.lang.String)
//  .autoDeleteOnIdle(java.lang.String)
//  .batchedOperationsEnabled(java.lang.Boolean)
//  .batchedOperationsEnabled(IResolvable)
//  .clientScopedSubscription(ServicebusSubscriptionClientScopedSubscription)
//  .clientScopedSubscriptionEnabled(java.lang.Boolean)
//  .clientScopedSubscriptionEnabled(IResolvable)
//  .deadLetteringOnFilterEvaluationError(java.lang.Boolean)
//  .deadLetteringOnFilterEvaluationError(IResolvable)
//  .deadLetteringOnMessageExpiration(java.lang.Boolean)
//  .deadLetteringOnMessageExpiration(IResolvable)
//  .defaultMessageTtl(java.lang.String)
//  .forwardDeadLetteredMessagesTo(java.lang.String)
//  .forwardTo(java.lang.String)
//  .id(java.lang.String)
//  .lockDuration(java.lang.String)
//  .requiresSession(java.lang.Boolean)
//  .requiresSession(IResolvable)
//  .status(java.lang.String)
//  .timeouts(ServicebusSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscription">clientScopedSubscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | client_scoped_subscription block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscriptionEnabled">clientScopedSubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.maxDeliveryCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}.

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.autoDeleteOnIdle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}.

---

##### `batchedOperationsEnabled`<sup>Optional</sup> <a name="batchedOperationsEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.batchedOperationsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}.

---

##### `clientScopedSubscription`<sup>Optional</sup> <a name="clientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscription"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

client_scoped_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}

---

##### `clientScopedSubscriptionEnabled`<sup>Optional</sup> <a name="clientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.clientScopedSubscriptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}.

---

##### `deadLetteringOnFilterEvaluationError`<sup>Optional</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnFilterEvaluationError"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}.

---

##### `deadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.deadLetteringOnMessageExpiration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.defaultMessageTtl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}.

---

##### `forwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardDeadLetteredMessagesTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}.

---

##### `forwardTo`<sup>Optional</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.forwardTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockDuration`<sup>Optional</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.lockDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}.

---

##### `requiresSession`<sup>Optional</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.requiresSession"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription">putClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle">resetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetBatchedOperationsEnabled">resetBatchedOperationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription">resetClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled">resetClientScopedSubscriptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError">resetDeadLetteringOnFilterEvaluationError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration">resetDeadLetteringOnMessageExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl">resetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo">resetForwardDeadLetteredMessagesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo">resetForwardTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration">resetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession">resetRequiresSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientScopedSubscription` <a name="putClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription"></a>

```java
public void putClientScopedSubscription(ServicebusSubscriptionClientScopedSubscription value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putClientScopedSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts"></a>

```java
public void putTimeouts(ServicebusSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---

##### `resetAutoDeleteOnIdle` <a name="resetAutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetAutoDeleteOnIdle"></a>

```java
public void resetAutoDeleteOnIdle()
```

##### `resetBatchedOperationsEnabled` <a name="resetBatchedOperationsEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetBatchedOperationsEnabled"></a>

```java
public void resetBatchedOperationsEnabled()
```

##### `resetClientScopedSubscription` <a name="resetClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscription"></a>

```java
public void resetClientScopedSubscription()
```

##### `resetClientScopedSubscriptionEnabled` <a name="resetClientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetClientScopedSubscriptionEnabled"></a>

```java
public void resetClientScopedSubscriptionEnabled()
```

##### `resetDeadLetteringOnFilterEvaluationError` <a name="resetDeadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnFilterEvaluationError"></a>

```java
public void resetDeadLetteringOnFilterEvaluationError()
```

##### `resetDeadLetteringOnMessageExpiration` <a name="resetDeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDeadLetteringOnMessageExpiration"></a>

```java
public void resetDeadLetteringOnMessageExpiration()
```

##### `resetDefaultMessageTtl` <a name="resetDefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetDefaultMessageTtl"></a>

```java
public void resetDefaultMessageTtl()
```

##### `resetForwardDeadLetteredMessagesTo` <a name="resetForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardDeadLetteredMessagesTo"></a>

```java
public void resetForwardDeadLetteredMessagesTo()
```

##### `resetForwardTo` <a name="resetForwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetForwardTo"></a>

```java
public void resetForwardTo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetLockDuration` <a name="resetLockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetLockDuration"></a>

```java
public void resetLockDuration()
```

##### `resetRequiresSession` <a name="resetRequiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetRequiresSession"></a>

```java
public void resetRequiresSession()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscription;

ServicebusSubscription.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscription;

ServicebusSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscription;

ServicebusSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscription;

ServicebusSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicebusSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicebusSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicebusSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicebusSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription">clientScopedSubscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput">autoDeleteOnIdleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabledInput">batchedOperationsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput">clientScopedSubscriptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput">clientScopedSubscriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput">deadLetteringOnFilterEvaluationErrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput">deadLetteringOnMessageExpirationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput">defaultMessageTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput">forwardDeadLetteredMessagesToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput">forwardToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput">lockDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput">maxDeliveryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput">requiresSessionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled">clientScopedSubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientScopedSubscription`<sup>Required</sup> <a name="clientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscription"></a>

```java
public ServicebusSubscriptionClientScopedSubscriptionOutputReference getClientScopedSubscription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference">ServicebusSubscriptionClientScopedSubscriptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeouts"></a>

```java
public ServicebusSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference">ServicebusSubscriptionTimeoutsOutputReference</a>

---

##### `autoDeleteOnIdleInput`<sup>Optional</sup> <a name="autoDeleteOnIdleInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdleInput"></a>

```java
public java.lang.String getAutoDeleteOnIdleInput();
```

- *Type:* java.lang.String

---

##### `batchedOperationsEnabledInput`<sup>Optional</sup> <a name="batchedOperationsEnabledInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabledInput"></a>

```java
public java.lang.Object getBatchedOperationsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientScopedSubscriptionEnabledInput`<sup>Optional</sup> <a name="clientScopedSubscriptionEnabledInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabledInput"></a>

```java
public java.lang.Object getClientScopedSubscriptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientScopedSubscriptionInput`<sup>Optional</sup> <a name="clientScopedSubscriptionInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionInput"></a>

```java
public ServicebusSubscriptionClientScopedSubscription getClientScopedSubscriptionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---

##### `deadLetteringOnFilterEvaluationErrorInput`<sup>Optional</sup> <a name="deadLetteringOnFilterEvaluationErrorInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationErrorInput"></a>

```java
public java.lang.Object getDeadLetteringOnFilterEvaluationErrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deadLetteringOnMessageExpirationInput`<sup>Optional</sup> <a name="deadLetteringOnMessageExpirationInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpirationInput"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpirationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultMessageTtlInput`<sup>Optional</sup> <a name="defaultMessageTtlInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtlInput"></a>

```java
public java.lang.String getDefaultMessageTtlInput();
```

- *Type:* java.lang.String

---

##### `forwardDeadLetteredMessagesToInput`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesToInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesToInput"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesToInput();
```

- *Type:* java.lang.String

---

##### `forwardToInput`<sup>Optional</sup> <a name="forwardToInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardToInput"></a>

```java
public java.lang.String getForwardToInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lockDurationInput`<sup>Optional</sup> <a name="lockDurationInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDurationInput"></a>

```java
public java.lang.String getLockDurationInput();
```

- *Type:* java.lang.String

---

##### `maxDeliveryCountInput`<sup>Optional</sup> <a name="maxDeliveryCountInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCountInput"></a>

```java
public java.lang.Number getMaxDeliveryCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiresSessionInput`<sup>Optional</sup> <a name="requiresSessionInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSessionInput"></a>

```java
public java.lang.Object getRequiresSessionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.autoDeleteOnIdle"></a>

```java
public java.lang.String getAutoDeleteOnIdle();
```

- *Type:* java.lang.String

---

##### `batchedOperationsEnabled`<sup>Required</sup> <a name="batchedOperationsEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.batchedOperationsEnabled"></a>

```java
public java.lang.Object getBatchedOperationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientScopedSubscriptionEnabled`<sup>Required</sup> <a name="clientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.clientScopedSubscriptionEnabled"></a>

```java
public java.lang.Object getClientScopedSubscriptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deadLetteringOnFilterEvaluationError`<sup>Required</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnFilterEvaluationError"></a>

```java
public java.lang.Object getDeadLetteringOnFilterEvaluationError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deadLetteringOnMessageExpiration`<sup>Required</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.deadLetteringOnMessageExpiration"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.defaultMessageTtl"></a>

```java
public java.lang.String getDefaultMessageTtl();
```

- *Type:* java.lang.String

---

##### `forwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardDeadLetteredMessagesTo"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesTo();
```

- *Type:* java.lang.String

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.forwardTo"></a>

```java
public java.lang.String getForwardTo();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lockDuration`<sup>Required</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.lockDuration"></a>

```java
public java.lang.String getLockDuration();
```

- *Type:* java.lang.String

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.maxDeliveryCount"></a>

```java
public java.lang.Number getMaxDeliveryCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `requiresSession`<sup>Required</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.requiresSession"></a>

```java
public java.lang.Object getRequiresSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusSubscriptionClientScopedSubscription <a name="ServicebusSubscriptionClientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscriptionClientScopedSubscription;

ServicebusSubscriptionClientScopedSubscription.builder()
//  .clientId(java.lang.String)
//  .isClientScopedSubscriptionShareable(java.lang.Boolean)
//  .isClientScopedSubscriptionShareable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable">isClientScopedSubscriptionShareable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_id ServicebusSubscription#client_id}.

---

##### `isClientScopedSubscriptionShareable`<sup>Optional</sup> <a name="isClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription.property.isClientScopedSubscriptionShareable"></a>

```java
public java.lang.Object getIsClientScopedSubscriptionShareable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#is_client_scoped_subscription_shareable ServicebusSubscription#is_client_scoped_subscription_shareable}.

---

### ServicebusSubscriptionConfig <a name="ServicebusSubscriptionConfig" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscriptionConfig;

ServicebusSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .maxDeliveryCount(java.lang.Number)
    .name(java.lang.String)
    .topicId(java.lang.String)
//  .autoDeleteOnIdle(java.lang.String)
//  .batchedOperationsEnabled(java.lang.Boolean)
//  .batchedOperationsEnabled(IResolvable)
//  .clientScopedSubscription(ServicebusSubscriptionClientScopedSubscription)
//  .clientScopedSubscriptionEnabled(java.lang.Boolean)
//  .clientScopedSubscriptionEnabled(IResolvable)
//  .deadLetteringOnFilterEvaluationError(java.lang.Boolean)
//  .deadLetteringOnFilterEvaluationError(IResolvable)
//  .deadLetteringOnMessageExpiration(java.lang.Boolean)
//  .deadLetteringOnMessageExpiration(IResolvable)
//  .defaultMessageTtl(java.lang.String)
//  .forwardDeadLetteredMessagesTo(java.lang.String)
//  .forwardTo(java.lang.String)
//  .id(java.lang.String)
//  .lockDuration(java.lang.String)
//  .requiresSession(java.lang.Boolean)
//  .requiresSession(IResolvable)
//  .status(java.lang.String)
//  .timeouts(ServicebusSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.batchedOperationsEnabled">batchedOperationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription">clientScopedSubscription</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | client_scoped_subscription block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled">clientScopedSubscriptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError">deadLetteringOnFilterEvaluationError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.maxDeliveryCount"></a>

```java
public java.lang.Number getMaxDeliveryCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#max_delivery_count ServicebusSubscription#max_delivery_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#name ServicebusSubscription#name}.

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#topic_id ServicebusSubscription#topic_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.autoDeleteOnIdle"></a>

```java
public java.lang.String getAutoDeleteOnIdle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#auto_delete_on_idle ServicebusSubscription#auto_delete_on_idle}.

---

##### `batchedOperationsEnabled`<sup>Optional</sup> <a name="batchedOperationsEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.batchedOperationsEnabled"></a>

```java
public java.lang.Object getBatchedOperationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#batched_operations_enabled ServicebusSubscription#batched_operations_enabled}.

---

##### `clientScopedSubscription`<sup>Optional</sup> <a name="clientScopedSubscription" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscription"></a>

```java
public ServicebusSubscriptionClientScopedSubscription getClientScopedSubscription();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

client_scoped_subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription ServicebusSubscription#client_scoped_subscription}

---

##### `clientScopedSubscriptionEnabled`<sup>Optional</sup> <a name="clientScopedSubscriptionEnabled" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.clientScopedSubscriptionEnabled"></a>

```java
public java.lang.Object getClientScopedSubscriptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#client_scoped_subscription_enabled ServicebusSubscription#client_scoped_subscription_enabled}.

---

##### `deadLetteringOnFilterEvaluationError`<sup>Optional</sup> <a name="deadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnFilterEvaluationError"></a>

```java
public java.lang.Object getDeadLetteringOnFilterEvaluationError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_filter_evaluation_error ServicebusSubscription#dead_lettering_on_filter_evaluation_error}.

---

##### `deadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.deadLetteringOnMessageExpiration"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#dead_lettering_on_message_expiration ServicebusSubscription#dead_lettering_on_message_expiration}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.defaultMessageTtl"></a>

```java
public java.lang.String getDefaultMessageTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#default_message_ttl ServicebusSubscription#default_message_ttl}.

---

##### `forwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardDeadLetteredMessagesTo"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_dead_lettered_messages_to ServicebusSubscription#forward_dead_lettered_messages_to}.

---

##### `forwardTo`<sup>Optional</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.forwardTo"></a>

```java
public java.lang.String getForwardTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#forward_to ServicebusSubscription#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#id ServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockDuration`<sup>Optional</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.lockDuration"></a>

```java
public java.lang.String getLockDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#lock_duration ServicebusSubscription#lock_duration}.

---

##### `requiresSession`<sup>Optional</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.requiresSession"></a>

```java
public java.lang.Object getRequiresSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#requires_session ServicebusSubscription#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#status ServicebusSubscription#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionConfig.property.timeouts"></a>

```java
public ServicebusSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#timeouts ServicebusSubscription#timeouts}

---

### ServicebusSubscriptionTimeouts <a name="ServicebusSubscriptionTimeouts" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscriptionTimeouts;

ServicebusSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#create ServicebusSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#delete ServicebusSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#read ServicebusSubscription#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/servicebus_subscription#update ServicebusSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusSubscriptionClientScopedSubscriptionOutputReference <a name="ServicebusSubscriptionClientScopedSubscriptionOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference;

new ServicebusSubscriptionClientScopedSubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable">resetIsClientScopedSubscriptionShareable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetIsClientScopedSubscriptionShareable` <a name="resetIsClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.resetIsClientScopedSubscriptionShareable"></a>

```java
public void resetIsClientScopedSubscriptionShareable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable">isClientScopedSubscriptionDurable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput">isClientScopedSubscriptionShareableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable">isClientScopedSubscriptionShareable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isClientScopedSubscriptionDurable`<sup>Required</sup> <a name="isClientScopedSubscriptionDurable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionDurable"></a>

```java
public IResolvable getIsClientScopedSubscriptionDurable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `isClientScopedSubscriptionShareableInput`<sup>Optional</sup> <a name="isClientScopedSubscriptionShareableInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareableInput"></a>

```java
public java.lang.Object getIsClientScopedSubscriptionShareableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `isClientScopedSubscriptionShareable`<sup>Required</sup> <a name="isClientScopedSubscriptionShareable" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.isClientScopedSubscriptionShareable"></a>

```java
public java.lang.Object getIsClientScopedSubscriptionShareable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscriptionOutputReference.property.internalValue"></a>

```java
public ServicebusSubscriptionClientScopedSubscription getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionClientScopedSubscription">ServicebusSubscriptionClientScopedSubscription</a>

---


### ServicebusSubscriptionTimeoutsOutputReference <a name="ServicebusSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_subscription.ServicebusSubscriptionTimeoutsOutputReference;

new ServicebusSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusSubscription.ServicebusSubscriptionTimeouts">ServicebusSubscriptionTimeouts</a>

---



