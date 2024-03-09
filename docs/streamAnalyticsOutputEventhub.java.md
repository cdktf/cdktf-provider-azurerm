# `streamAnalyticsOutputEventhub` Submodule <a name="`streamAnalyticsOutputEventhub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputEventhub <a name="StreamAnalyticsOutputEventhub" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub azurerm_stream_analytics_output_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhub;

StreamAnalyticsOutputEventhub.Builder.create(Construct scope, java.lang.String id)
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
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputEventhubSerialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .id(java.lang.String)
//  .partitionKey(java.lang.String)
//  .propertyColumns(java.util.List<java.lang.String>)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .timeouts(StreamAnalyticsOutputEventhubTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.eventhubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#serialization StreamAnalyticsOutputEventhub#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.servicebusNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.authenticationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.partitionKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.propertyColumns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.sharedAccessPolicyKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#timeouts StreamAnalyticsOutputEventhub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPropertyColumns">resetPropertyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyKey">resetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyName">resetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization"></a>

```java
public void putSerialization(StreamAnalyticsOutputEventhubSerialization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsOutputEventhubTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

---

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetAuthenticationMode"></a>

```java
public void resetAuthenticationMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetId"></a>

```java
public void resetId()
```

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPartitionKey"></a>

```java
public void resetPartitionKey()
```

##### `resetPropertyColumns` <a name="resetPropertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetPropertyColumns"></a>

```java
public void resetPropertyColumns()
```

##### `resetSharedAccessPolicyKey` <a name="resetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyKey"></a>

```java
public void resetSharedAccessPolicyKey()
```

##### `resetSharedAccessPolicyName` <a name="resetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetSharedAccessPolicyName"></a>

```java
public void resetSharedAccessPolicyName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhub;

StreamAnalyticsOutputEventhub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhub;

StreamAnalyticsOutputEventhub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhub;

StreamAnalyticsOutputEventhub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhub;

StreamAnalyticsOutputEventhub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsOutputEventhub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamAnalyticsOutputEventhub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsOutputEventhub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsOutputEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference">StreamAnalyticsOutputEventhubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference">StreamAnalyticsOutputEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationModeInput">authenticationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubNameInput">eventhubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKeyInput">partitionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumnsInput">propertyColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespaceInput">servicebusNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKeyInput">sharedAccessPolicyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyNameInput">sharedAccessPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serialization"></a>

```java
public StreamAnalyticsOutputEventhubSerializationOutputReference getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference">StreamAnalyticsOutputEventhubSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeouts"></a>

```java
public StreamAnalyticsOutputEventhubTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference">StreamAnalyticsOutputEventhubTimeoutsOutputReference</a>

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationModeInput"></a>

```java
public java.lang.String getAuthenticationModeInput();
```

- *Type:* java.lang.String

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubNameInput"></a>

```java
public java.lang.String getEventhubNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKeyInput"></a>

```java
public java.lang.String getPartitionKeyInput();
```

- *Type:* java.lang.String

---

##### `propertyColumnsInput`<sup>Optional</sup> <a name="propertyColumnsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumnsInput"></a>

```java
public java.util.List<java.lang.String> getPropertyColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.serializationInput"></a>

```java
public StreamAnalyticsOutputEventhubSerialization getSerializationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---

##### `servicebusNamespaceInput`<sup>Optional</sup> <a name="servicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespaceInput"></a>

```java
public java.lang.String getServicebusNamespaceInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="sharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKeyInput"></a>

```java
public java.lang.String getSharedAccessPolicyKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyNameInput`<sup>Optional</sup> <a name="sharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyNameInput"></a>

```java
public java.lang.String getSharedAccessPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

---

##### `propertyColumns`<sup>Required</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.propertyColumns"></a>

```java
public java.util.List<java.lang.String> getPropertyColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyKey`<sup>Required</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

---

##### `sharedAccessPolicyName`<sup>Required</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputEventhubConfig <a name="StreamAnalyticsOutputEventhubConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhubConfig;

StreamAnalyticsOutputEventhubConfig.builder()
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
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsOutputEventhubSerialization)
    .servicebusNamespace(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
//  .authenticationMode(java.lang.String)
//  .id(java.lang.String)
//  .partitionKey(java.lang.String)
//  .propertyColumns(java.util.List<java.lang.String>)
//  .sharedAccessPolicyKey(java.lang.String)
//  .sharedAccessPolicyName(java.lang.String)
//  .timeouts(StreamAnalyticsOutputEventhubTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.servicebusNamespace">servicebusNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.partitionKey">partitionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.propertyColumns">propertyColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyKey">sharedAccessPolicyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyName">sharedAccessPolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#name StreamAnalyticsOutputEventhub#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.serialization"></a>

```java
public StreamAnalyticsOutputEventhubSerialization getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#serialization StreamAnalyticsOutputEventhub#serialization}

---

##### `servicebusNamespace`<sup>Required</sup> <a name="servicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.servicebusNamespace"></a>

```java
public java.lang.String getServicebusNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}.

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#authentication_mode StreamAnalyticsOutputEventhub#authentication_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#id StreamAnalyticsOutputEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.partitionKey"></a>

```java
public java.lang.String getPartitionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#partition_key StreamAnalyticsOutputEventhub#partition_key}.

---

##### `propertyColumns`<sup>Optional</sup> <a name="propertyColumns" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.propertyColumns"></a>

```java
public java.util.List<java.lang.String> getPropertyColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#property_columns StreamAnalyticsOutputEventhub#property_columns}.

---

##### `sharedAccessPolicyKey`<sup>Optional</sup> <a name="sharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyKey"></a>

```java
public java.lang.String getSharedAccessPolicyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}.

---

##### `sharedAccessPolicyName`<sup>Optional</sup> <a name="sharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.sharedAccessPolicyName"></a>

```java
public java.lang.String getSharedAccessPolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubConfig.property.timeouts"></a>

```java
public StreamAnalyticsOutputEventhubTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#timeouts StreamAnalyticsOutputEventhub#timeouts}

---

### StreamAnalyticsOutputEventhubSerialization <a name="StreamAnalyticsOutputEventhubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhubSerialization;

StreamAnalyticsOutputEventhubSerialization.builder()
    .type(java.lang.String)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#type StreamAnalyticsOutputEventhub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#encoding StreamAnalyticsOutputEventhub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#format StreamAnalyticsOutputEventhub#format}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#type StreamAnalyticsOutputEventhub#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#encoding StreamAnalyticsOutputEventhub#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#format StreamAnalyticsOutputEventhub#format}.

---

### StreamAnalyticsOutputEventhubTimeouts <a name="StreamAnalyticsOutputEventhubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhubTimeouts;

StreamAnalyticsOutputEventhubTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#create StreamAnalyticsOutputEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#delete StreamAnalyticsOutputEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#read StreamAnalyticsOutputEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#update StreamAnalyticsOutputEventhub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#create StreamAnalyticsOutputEventhub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#delete StreamAnalyticsOutputEventhub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#read StreamAnalyticsOutputEventhub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/stream_analytics_output_eventhub#update StreamAnalyticsOutputEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputEventhubSerializationOutputReference <a name="StreamAnalyticsOutputEventhubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhubSerializationOutputReference;

new StreamAnalyticsOutputEventhubSerializationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerializationOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsOutputEventhubSerialization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubSerialization">StreamAnalyticsOutputEventhubSerialization</a>

---


### StreamAnalyticsOutputEventhubTimeoutsOutputReference <a name="StreamAnalyticsOutputEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_output_eventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference;

new StreamAnalyticsOutputEventhubTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputEventhub.StreamAnalyticsOutputEventhubTimeouts">StreamAnalyticsOutputEventhubTimeouts</a>

---



