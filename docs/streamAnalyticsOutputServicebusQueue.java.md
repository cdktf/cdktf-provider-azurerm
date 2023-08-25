# `azurerm_stream_analytics_output_servicebus_queue`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_output_servicebus_queue`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue).

# `streamAnalyticsOutputServicebusQueue` Submodule <a name="`streamAnalyticsOutputServicebusQueue` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputServicebusQueue <a name="StreamAnalyticsOutputServicebusQueue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue azurerm_stream_analytics_output_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueue;

StreamAnalyticsOutputServicebusQueue.Builder.create(Construct scope, java.lang.String id)
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
    .queueName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputServicebusQueueSerialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .id(java.lang.String)
//  .propertyColumns(java.util.List<java.lang.String>)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .systemPropertyColumns(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StreamAnalyticsOutputServicebusQueueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.queueName">queueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.systemPropertyColumns">systemPropertyColumns</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.queueName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#serialization StreamAnalyticsOutputServicebusQueue#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.servicebusNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.propertyColumns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}.

---

##### `systemPropertyColumns`<sup>Optional</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.systemPropertyColumns"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns">resetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns">resetSystemPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization"></a>

```java
public void putSerialization(StreamAnalyticsOutputServicebusQueueSerialization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsOutputServicebusQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetId"></a>

```java
public void resetId()
```

##### `resetPropertyColumns` <a name="resetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetPropertyColumns"></a>

```java
public void resetPropertyColumns()
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyKey"></a>

```java
public void resetSharedAccessPolicyKey()
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSharedAccessPolicyName"></a>

```java
public void resetSharedAccessPolicyName()
```

##### `resetSystemPropertyColumns` <a name="resetSystemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetSystemPropertyColumns"></a>

```java
public void resetSystemPropertyColumns()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueue;

StreamAnalyticsOutputServicebusQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueue;

StreamAnalyticsOutputServicebusQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueue;

StreamAnalyticsOutputServicebusQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput">propertyColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput">queueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput">systemPropertyColumnsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName">queueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serialization"></a>

```java
public StreamAnalyticsOutputServicebusQueueSerializationOutputReference getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference">StreamAnalyticsOutputServicebusQueueSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeouts"></a>

```java
public StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference">StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertyColumnsInput`<sup>Optional</sup> <a name="propertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPropertyColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueNameInput`<sup>Optional</sup> <a name="queueNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueNameInput"></a>

```java
public java.lang.String getQueueNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.serializationInput"></a>

```java
public StreamAnalyticsOutputServicebusQueueSerialization getSerializationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespaceInput"></a>

```java
public java.lang.String getServicebusNamespaceInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKeyInput"></a>

```java
public java.lang.String getSharedAccessPolicyKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyNameInput"></a>

```java
public java.lang.String getSharedAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `systemPropertyColumnsInput`<sup>Optional</sup> <a name="systemPropertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumnsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemPropertyColumnsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `propertyColumns`<sup>Required</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.propertyColumns"></a>

```java
public java.util.List<java.lang.String> getPropertyColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

##### `systemPropertyColumns`<sup>Required</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.systemPropertyColumns"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemPropertyColumns();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputServicebusQueueConfig <a name="StreamAnalyticsOutputServicebusQueueConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueueConfig;

StreamAnalyticsOutputServicebusQueueConfig.builder()
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
    .queueName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputServicebusQueueSerialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .id(java.lang.String)
//  .propertyColumns(java.util.List<java.lang.String>)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .systemPropertyColumns(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StreamAnalyticsOutputServicebusQueueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName">queueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns">systemPropertyColumns</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#name StreamAnalyticsOutputServicebusQueue#name}.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.queueName"></a>

```java
public java.lang.String getQueueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.serialization"></a>

```java
public StreamAnalyticsOutputServicebusQueueSerialization getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#serialization StreamAnalyticsOutputServicebusQueue#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#authentication_mode StreamAnalyticsOutputServicebusQueue#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#id StreamAnalyticsOutputServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.propertyColumns"></a>

```java
public java.util.List<java.lang.String> getPropertyColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#property_columns StreamAnalyticsOutputServicebusQueue#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}.

---

##### `systemPropertyColumns`<sup>Optional</sup> <a name="systemPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.systemPropertyColumns"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSystemPropertyColumns();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#system_property_columns StreamAnalyticsOutputServicebusQueue#system_property_columns}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueConfig.property.timeouts"></a>

```java
public StreamAnalyticsOutputServicebusQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}

---

### StreamAnalyticsOutputServicebusQueueSerialization <a name="StreamAnalyticsOutputServicebusQueueSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueueSerialization;

StreamAnalyticsOutputServicebusQueueSerialization.builder()
    .type(java.lang.String)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#type StreamAnalyticsOutputServicebusQueue#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#encoding StreamAnalyticsOutputServicebusQueue#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#format StreamAnalyticsOutputServicebusQueue#format}.

---

### StreamAnalyticsOutputServicebusQueueTimeouts <a name="StreamAnalyticsOutputServicebusQueueTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueueTimeouts;

StreamAnalyticsOutputServicebusQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#create StreamAnalyticsOutputServicebusQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#delete StreamAnalyticsOutputServicebusQueue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#read StreamAnalyticsOutputServicebusQueue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_output_servicebus_queue#update StreamAnalyticsOutputServicebusQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputServicebusQueueSerializationOutputReference <a name="StreamAnalyticsOutputServicebusQueueSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference;

new StreamAnalyticsOutputServicebusQueueSerializationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerializationOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsOutputServicebusQueueSerialization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueSerialization">StreamAnalyticsOutputServicebusQueueSerialization</a>

---


### StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference <a name="StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_servicebus_queue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference;

new StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputServicebusQueue.StreamAnalyticsOutputServicebusQueueTimeouts">StreamAnalyticsOutputServicebusQueueTimeouts</a>

---



