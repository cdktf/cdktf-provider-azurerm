# `servicebusQueue` Submodule <a name="`servicebusQueue` Submodule" id="@cdktf/provider-azurerm.servicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusQueue <a name="ServicebusQueue" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue azurerm_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueue;

ServicebusQueue.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .namespaceId(java.lang.String)
//  .autoDeleteOnIdle(java.lang.String)
//  .deadLetteringOnMessageExpiration(java.lang.Boolean)
//  .deadLetteringOnMessageExpiration(IResolvable)
//  .defaultMessageTtl(java.lang.String)
//  .duplicateDetectionHistoryTimeWindow(java.lang.String)
//  .enableBatchedOperations(java.lang.Boolean)
//  .enableBatchedOperations(IResolvable)
//  .enableExpress(java.lang.Boolean)
//  .enableExpress(IResolvable)
//  .enablePartitioning(java.lang.Boolean)
//  .enablePartitioning(IResolvable)
//  .forwardDeadLetteredMessagesTo(java.lang.String)
//  .forwardTo(java.lang.String)
//  .id(java.lang.String)
//  .lockDuration(java.lang.String)
//  .maxDeliveryCount(java.lang.Number)
//  .maxMessageSizeInKilobytes(java.lang.Number)
//  .maxSizeInMegabytes(java.lang.Number)
//  .requiresDuplicateDetection(java.lang.Boolean)
//  .requiresDuplicateDetection(IResolvable)
//  .requiresSession(java.lang.Boolean)
//  .requiresSession(IResolvable)
//  .status(java.lang.String)
//  .timeouts(ServicebusQueueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableBatchedOperations">enableBatchedOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableExpress">enableExpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enablePartitioning">enablePartitioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxMessageSizeInKilobytes">maxMessageSizeInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.autoDeleteOnIdle"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `deadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.deadLetteringOnMessageExpiration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.defaultMessageTtl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.duplicateDetectionHistoryTimeWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `enableBatchedOperations`<sup>Optional</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableBatchedOperations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}.

---

##### `enableExpress`<sup>Optional</sup> <a name="enableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enableExpress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}.

---

##### `enablePartitioning`<sup>Optional</sup> <a name="enablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.enablePartitioning"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}.

---

##### `forwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardDeadLetteredMessagesTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `forwardTo`<sup>Optional</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.forwardTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockDuration`<sup>Optional</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.lockDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `maxDeliveryCount`<sup>Optional</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxDeliveryCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `maxMessageSizeInKilobytes`<sup>Optional</sup> <a name="maxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxMessageSizeInKilobytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `maxSizeInMegabytes`<sup>Optional</sup> <a name="maxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.maxSizeInMegabytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `requiresDuplicateDetection`<sup>Optional</sup> <a name="requiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresDuplicateDetection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `requiresSession`<sup>Optional</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.requiresSession"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle">resetAutoDeleteOnIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration">resetDeadLetteringOnMessageExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl">resetDefaultMessageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow">resetDuplicateDetectionHistoryTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations">resetEnableBatchedOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress">resetEnableExpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning">resetEnablePartitioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo">resetForwardDeadLetteredMessagesTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo">resetForwardTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration">resetLockDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount">resetMaxDeliveryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes">resetMaxMessageSizeInKilobytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes">resetMaxSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection">resetRequiresDuplicateDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession">resetRequiresSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts"></a>

```java
public void putTimeouts(ServicebusQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---

##### `resetAutoDeleteOnIdle` <a name="resetAutoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetAutoDeleteOnIdle"></a>

```java
public void resetAutoDeleteOnIdle()
```

##### `resetDeadLetteringOnMessageExpiration` <a name="resetDeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDeadLetteringOnMessageExpiration"></a>

```java
public void resetDeadLetteringOnMessageExpiration()
```

##### `resetDefaultMessageTtl` <a name="resetDefaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDefaultMessageTtl"></a>

```java
public void resetDefaultMessageTtl()
```

##### `resetDuplicateDetectionHistoryTimeWindow` <a name="resetDuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetDuplicateDetectionHistoryTimeWindow"></a>

```java
public void resetDuplicateDetectionHistoryTimeWindow()
```

##### `resetEnableBatchedOperations` <a name="resetEnableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableBatchedOperations"></a>

```java
public void resetEnableBatchedOperations()
```

##### `resetEnableExpress` <a name="resetEnableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnableExpress"></a>

```java
public void resetEnableExpress()
```

##### `resetEnablePartitioning` <a name="resetEnablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetEnablePartitioning"></a>

```java
public void resetEnablePartitioning()
```

##### `resetForwardDeadLetteredMessagesTo` <a name="resetForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardDeadLetteredMessagesTo"></a>

```java
public void resetForwardDeadLetteredMessagesTo()
```

##### `resetForwardTo` <a name="resetForwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetForwardTo"></a>

```java
public void resetForwardTo()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetId"></a>

```java
public void resetId()
```

##### `resetLockDuration` <a name="resetLockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetLockDuration"></a>

```java
public void resetLockDuration()
```

##### `resetMaxDeliveryCount` <a name="resetMaxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxDeliveryCount"></a>

```java
public void resetMaxDeliveryCount()
```

##### `resetMaxMessageSizeInKilobytes` <a name="resetMaxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxMessageSizeInKilobytes"></a>

```java
public void resetMaxMessageSizeInKilobytes()
```

##### `resetMaxSizeInMegabytes` <a name="resetMaxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetMaxSizeInMegabytes"></a>

```java
public void resetMaxSizeInMegabytes()
```

##### `resetRequiresDuplicateDetection` <a name="resetRequiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresDuplicateDetection"></a>

```java
public void resetRequiresDuplicateDetection()
```

##### `resetRequiresSession` <a name="resetRequiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetRequiresSession"></a>

```java
public void resetRequiresSession()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicebusQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueue;

ServicebusQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueue;

ServicebusQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueue;

ServicebusQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueue;

ServicebusQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicebusQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServicebusQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicebusQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput">autoDeleteOnIdleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput">deadLetteringOnMessageExpirationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput">defaultMessageTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput">duplicateDetectionHistoryTimeWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput">enableBatchedOperationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput">enableExpressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput">enablePartitioningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput">forwardDeadLetteredMessagesToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput">forwardToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput">lockDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput">maxDeliveryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput">maxMessageSizeInKilobytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput">maxSizeInMegabytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput">requiresDuplicateDetectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput">requiresSessionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress">enableExpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning">enablePartitioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes">maxMessageSizeInKilobytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeouts"></a>

```java
public ServicebusQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference">ServicebusQueueTimeoutsOutputReference</a>

---

##### `autoDeleteOnIdleInput`<sup>Optional</sup> <a name="autoDeleteOnIdleInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdleInput"></a>

```java
public java.lang.String getAutoDeleteOnIdleInput();
```

- *Type:* java.lang.String

---

##### `deadLetteringOnMessageExpirationInput`<sup>Optional</sup> <a name="deadLetteringOnMessageExpirationInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpirationInput"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpirationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultMessageTtlInput`<sup>Optional</sup> <a name="defaultMessageTtlInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtlInput"></a>

```java
public java.lang.String getDefaultMessageTtlInput();
```

- *Type:* java.lang.String

---

##### `duplicateDetectionHistoryTimeWindowInput`<sup>Optional</sup> <a name="duplicateDetectionHistoryTimeWindowInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindowInput"></a>

```java
public java.lang.String getDuplicateDetectionHistoryTimeWindowInput();
```

- *Type:* java.lang.String

---

##### `enableBatchedOperationsInput`<sup>Optional</sup> <a name="enableBatchedOperationsInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperationsInput"></a>

```java
public java.lang.Object getEnableBatchedOperationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExpressInput`<sup>Optional</sup> <a name="enableExpressInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpressInput"></a>

```java
public java.lang.Object getEnableExpressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePartitioningInput`<sup>Optional</sup> <a name="enablePartitioningInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioningInput"></a>

```java
public java.lang.Object getEnablePartitioningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardDeadLetteredMessagesToInput`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesToInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesToInput"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesToInput();
```

- *Type:* java.lang.String

---

##### `forwardToInput`<sup>Optional</sup> <a name="forwardToInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardToInput"></a>

```java
public java.lang.String getForwardToInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lockDurationInput`<sup>Optional</sup> <a name="lockDurationInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDurationInput"></a>

```java
public java.lang.String getLockDurationInput();
```

- *Type:* java.lang.String

---

##### `maxDeliveryCountInput`<sup>Optional</sup> <a name="maxDeliveryCountInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCountInput"></a>

```java
public java.lang.Number getMaxDeliveryCountInput();
```

- *Type:* java.lang.Number

---

##### `maxMessageSizeInKilobytesInput`<sup>Optional</sup> <a name="maxMessageSizeInKilobytesInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytesInput"></a>

```java
public java.lang.Number getMaxMessageSizeInKilobytesInput();
```

- *Type:* java.lang.Number

---

##### `maxSizeInMegabytesInput`<sup>Optional</sup> <a name="maxSizeInMegabytesInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytesInput"></a>

```java
public java.lang.Number getMaxSizeInMegabytesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `requiresDuplicateDetectionInput`<sup>Optional</sup> <a name="requiresDuplicateDetectionInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetectionInput"></a>

```java
public java.lang.Object getRequiresDuplicateDetectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiresSessionInput`<sup>Optional</sup> <a name="requiresSessionInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSessionInput"></a>

```java
public java.lang.Object getRequiresSessionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---

##### `autoDeleteOnIdle`<sup>Required</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.autoDeleteOnIdle"></a>

```java
public java.lang.String getAutoDeleteOnIdle();
```

- *Type:* java.lang.String

---

##### `deadLetteringOnMessageExpiration`<sup>Required</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.deadLetteringOnMessageExpiration"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultMessageTtl`<sup>Required</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.defaultMessageTtl"></a>

```java
public java.lang.String getDefaultMessageTtl();
```

- *Type:* java.lang.String

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.duplicateDetectionHistoryTimeWindow"></a>

```java
public java.lang.String getDuplicateDetectionHistoryTimeWindow();
```

- *Type:* java.lang.String

---

##### `enableBatchedOperations`<sup>Required</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableBatchedOperations"></a>

```java
public java.lang.Object getEnableBatchedOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableExpress`<sup>Required</sup> <a name="enableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enableExpress"></a>

```java
public java.lang.Object getEnableExpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enablePartitioning`<sup>Required</sup> <a name="enablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.enablePartitioning"></a>

```java
public java.lang.Object getEnablePartitioning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardDeadLetteredMessagesTo"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesTo();
```

- *Type:* java.lang.String

---

##### `forwardTo`<sup>Required</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.forwardTo"></a>

```java
public java.lang.String getForwardTo();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lockDuration`<sup>Required</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.lockDuration"></a>

```java
public java.lang.String getLockDuration();
```

- *Type:* java.lang.String

---

##### `maxDeliveryCount`<sup>Required</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxDeliveryCount"></a>

```java
public java.lang.Number getMaxDeliveryCount();
```

- *Type:* java.lang.Number

---

##### `maxMessageSizeInKilobytes`<sup>Required</sup> <a name="maxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxMessageSizeInKilobytes"></a>

```java
public java.lang.Number getMaxMessageSizeInKilobytes();
```

- *Type:* java.lang.Number

---

##### `maxSizeInMegabytes`<sup>Required</sup> <a name="maxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.maxSizeInMegabytes"></a>

```java
public java.lang.Number getMaxSizeInMegabytes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `requiresDuplicateDetection`<sup>Required</sup> <a name="requiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresDuplicateDetection"></a>

```java
public java.lang.Object getRequiresDuplicateDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requiresSession`<sup>Required</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.requiresSession"></a>

```java
public java.lang.Object getRequiresSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusQueueConfig <a name="ServicebusQueueConfig" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueueConfig;

ServicebusQueueConfig.builder()
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
    .name(java.lang.String)
    .namespaceId(java.lang.String)
//  .autoDeleteOnIdle(java.lang.String)
//  .deadLetteringOnMessageExpiration(java.lang.Boolean)
//  .deadLetteringOnMessageExpiration(IResolvable)
//  .defaultMessageTtl(java.lang.String)
//  .duplicateDetectionHistoryTimeWindow(java.lang.String)
//  .enableBatchedOperations(java.lang.Boolean)
//  .enableBatchedOperations(IResolvable)
//  .enableExpress(java.lang.Boolean)
//  .enableExpress(IResolvable)
//  .enablePartitioning(java.lang.Boolean)
//  .enablePartitioning(IResolvable)
//  .forwardDeadLetteredMessagesTo(java.lang.String)
//  .forwardTo(java.lang.String)
//  .id(java.lang.String)
//  .lockDuration(java.lang.String)
//  .maxDeliveryCount(java.lang.Number)
//  .maxMessageSizeInKilobytes(java.lang.Number)
//  .maxSizeInMegabytes(java.lang.Number)
//  .requiresDuplicateDetection(java.lang.Boolean)
//  .requiresDuplicateDetection(IResolvable)
//  .requiresSession(java.lang.Boolean)
//  .requiresSession(IResolvable)
//  .status(java.lang.String)
//  .timeouts(ServicebusQueueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#name ServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle">autoDeleteOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration">deadLetteringOnMessageExpiration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl">defaultMessageTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow">duplicateDetectionHistoryTimeWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations">enableBatchedOperations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress">enableExpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning">enablePartitioning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo">forwardDeadLetteredMessagesTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo">forwardTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#id ServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration">lockDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount">maxDeliveryCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes">maxMessageSizeInKilobytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes">maxSizeInMegabytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection">requiresDuplicateDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession">requiresSession</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#status ServicebusQueue#status}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#name ServicebusQueue#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#namespace_id ServicebusQueue#namespace_id}.

---

##### `autoDeleteOnIdle`<sup>Optional</sup> <a name="autoDeleteOnIdle" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.autoDeleteOnIdle"></a>

```java
public java.lang.String getAutoDeleteOnIdle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#auto_delete_on_idle ServicebusQueue#auto_delete_on_idle}.

---

##### `deadLetteringOnMessageExpiration`<sup>Optional</sup> <a name="deadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.deadLetteringOnMessageExpiration"></a>

```java
public java.lang.Object getDeadLetteringOnMessageExpiration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#dead_lettering_on_message_expiration ServicebusQueue#dead_lettering_on_message_expiration}.

---

##### `defaultMessageTtl`<sup>Optional</sup> <a name="defaultMessageTtl" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.defaultMessageTtl"></a>

```java
public java.lang.String getDefaultMessageTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#default_message_ttl ServicebusQueue#default_message_ttl}.

---

##### `duplicateDetectionHistoryTimeWindow`<sup>Optional</sup> <a name="duplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.duplicateDetectionHistoryTimeWindow"></a>

```java
public java.lang.String getDuplicateDetectionHistoryTimeWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#duplicate_detection_history_time_window ServicebusQueue#duplicate_detection_history_time_window}.

---

##### `enableBatchedOperations`<sup>Optional</sup> <a name="enableBatchedOperations" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableBatchedOperations"></a>

```java
public java.lang.Object getEnableBatchedOperations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_batched_operations ServicebusQueue#enable_batched_operations}.

---

##### `enableExpress`<sup>Optional</sup> <a name="enableExpress" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enableExpress"></a>

```java
public java.lang.Object getEnableExpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_express ServicebusQueue#enable_express}.

---

##### `enablePartitioning`<sup>Optional</sup> <a name="enablePartitioning" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.enablePartitioning"></a>

```java
public java.lang.Object getEnablePartitioning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#enable_partitioning ServicebusQueue#enable_partitioning}.

---

##### `forwardDeadLetteredMessagesTo`<sup>Optional</sup> <a name="forwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardDeadLetteredMessagesTo"></a>

```java
public java.lang.String getForwardDeadLetteredMessagesTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_dead_lettered_messages_to ServicebusQueue#forward_dead_lettered_messages_to}.

---

##### `forwardTo`<sup>Optional</sup> <a name="forwardTo" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.forwardTo"></a>

```java
public java.lang.String getForwardTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#forward_to ServicebusQueue#forward_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#id ServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockDuration`<sup>Optional</sup> <a name="lockDuration" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.lockDuration"></a>

```java
public java.lang.String getLockDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#lock_duration ServicebusQueue#lock_duration}.

---

##### `maxDeliveryCount`<sup>Optional</sup> <a name="maxDeliveryCount" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxDeliveryCount"></a>

```java
public java.lang.Number getMaxDeliveryCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_delivery_count ServicebusQueue#max_delivery_count}.

---

##### `maxMessageSizeInKilobytes`<sup>Optional</sup> <a name="maxMessageSizeInKilobytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxMessageSizeInKilobytes"></a>

```java
public java.lang.Number getMaxMessageSizeInKilobytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_message_size_in_kilobytes ServicebusQueue#max_message_size_in_kilobytes}.

---

##### `maxSizeInMegabytes`<sup>Optional</sup> <a name="maxSizeInMegabytes" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.maxSizeInMegabytes"></a>

```java
public java.lang.Number getMaxSizeInMegabytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#max_size_in_megabytes ServicebusQueue#max_size_in_megabytes}.

---

##### `requiresDuplicateDetection`<sup>Optional</sup> <a name="requiresDuplicateDetection" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresDuplicateDetection"></a>

```java
public java.lang.Object getRequiresDuplicateDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_duplicate_detection ServicebusQueue#requires_duplicate_detection}.

---

##### `requiresSession`<sup>Optional</sup> <a name="requiresSession" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.requiresSession"></a>

```java
public java.lang.Object getRequiresSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#requires_session ServicebusQueue#requires_session}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#status ServicebusQueue#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueConfig.property.timeouts"></a>

```java
public ServicebusQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#timeouts ServicebusQueue#timeouts}

---

### ServicebusQueueTimeouts <a name="ServicebusQueueTimeouts" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueueTimeouts;

ServicebusQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#create ServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#read ServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#update ServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#create ServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#delete ServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#read ServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/servicebus_queue#update ServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusQueueTimeoutsOutputReference <a name="ServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.servicebus_queue.ServicebusQueueTimeoutsOutputReference;

new ServicebusQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.servicebusQueue.ServicebusQueueTimeouts">ServicebusQueueTimeouts</a>

---



