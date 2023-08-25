# `azurerm_stream_analytics_stream_input_blob`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_stream_input_blob`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob).

# `streamAnalyticsStreamInputBlob` Submodule <a name="`streamAnalyticsStreamInputBlob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputBlob <a name="StreamAnalyticsStreamInputBlob" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob azurerm_stream_analytics_stream_input_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlob;

StreamAnalyticsStreamInputBlob.Builder.create(Construct scope, java.lang.String id)
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
    .dateFormat(java.lang.String)
    .name(java.lang.String)
    .pathPattern(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsStreamInputBlobSerialization)
    .storageAccountKey(java.lang.String)
    .storageAccountName(java.lang.String)
    .storageContainerName(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .timeFormat(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsStreamInputBlobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.dateFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.pathPattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.serialization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#serialization StreamAnalyticsStreamInputBlob#serialization}

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.storageContainerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}.

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#timeouts StreamAnalyticsStreamInputBlob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization">putSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSerialization` <a name="putSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization"></a>

```java
public void putSerialization(StreamAnalyticsStreamInputBlobSerialization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsStreamInputBlobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlob;

StreamAnalyticsStreamInputBlob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlob;

StreamAnalyticsStreamInputBlob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlob;

StreamAnalyticsStreamInputBlob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput">dateFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput">pathPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput">serializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput">storageContainerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput">timeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serialization"></a>

```java
public StreamAnalyticsStreamInputBlobSerializationOutputReference getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference">StreamAnalyticsStreamInputBlobSerializationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeouts"></a>

```java
public StreamAnalyticsStreamInputBlobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference">StreamAnalyticsStreamInputBlobTimeoutsOutputReference</a>

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormatInput"></a>

```java
public java.lang.String getDateFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathPatternInput`<sup>Optional</sup> <a name="pathPatternInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPatternInput"></a>

```java
public java.lang.String getPathPatternInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serializationInput`<sup>Optional</sup> <a name="serializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.serializationInput"></a>

```java
public StreamAnalyticsStreamInputBlobSerialization getSerializationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `storageContainerNameInput`<sup>Optional</sup> <a name="storageContainerNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerNameInput"></a>

```java
public java.lang.String getStorageContainerNameInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormatInput"></a>

```java
public java.lang.String getTimeFormatInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.pathPattern"></a>

```java
public java.lang.String getPathPattern();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputBlobConfig <a name="StreamAnalyticsStreamInputBlobConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlobConfig;

StreamAnalyticsStreamInputBlobConfig.builder()
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
    .dateFormat(java.lang.String)
    .name(java.lang.String)
    .pathPattern(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serialization(StreamAnalyticsStreamInputBlobSerialization)
    .storageAccountKey(java.lang.String)
    .storageAccountName(java.lang.String)
    .storageContainerName(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .timeFormat(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StreamAnalyticsStreamInputBlobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat">dateFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern">pathPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization">serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName">storageContainerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat">timeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.dateFormat"></a>

```java
public java.lang.String getDateFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#date_format StreamAnalyticsStreamInputBlob#date_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#name StreamAnalyticsStreamInputBlob#name}.

---

##### `pathPattern`<sup>Required</sup> <a name="pathPattern" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.pathPattern"></a>

```java
public java.lang.String getPathPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}.

---

##### `serialization`<sup>Required</sup> <a name="serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.serialization"></a>

```java
public StreamAnalyticsStreamInputBlobSerialization getSerialization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#serialization StreamAnalyticsStreamInputBlob#serialization}

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}.

---

##### `storageContainerName`<sup>Required</sup> <a name="storageContainerName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.storageContainerName"></a>

```java
public java.lang.String getStorageContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}.

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeFormat"></a>

```java
public java.lang.String getTimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#time_format StreamAnalyticsStreamInputBlob#time_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#id StreamAnalyticsStreamInputBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobConfig.property.timeouts"></a>

```java
public StreamAnalyticsStreamInputBlobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#timeouts StreamAnalyticsStreamInputBlob#timeouts}

---

### StreamAnalyticsStreamInputBlobSerialization <a name="StreamAnalyticsStreamInputBlobSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlobSerialization;

StreamAnalyticsStreamInputBlobSerialization.builder()
    .type(java.lang.String)
//  .encoding(java.lang.String)
//  .fieldDelimiter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#type StreamAnalyticsStreamInputBlob#type}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#encoding StreamAnalyticsStreamInputBlob#encoding}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}.

---

### StreamAnalyticsStreamInputBlobTimeouts <a name="StreamAnalyticsStreamInputBlobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlobTimeouts;

StreamAnalyticsStreamInputBlobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#create StreamAnalyticsStreamInputBlob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#delete StreamAnalyticsStreamInputBlob#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#read StreamAnalyticsStreamInputBlob#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/stream_analytics_stream_input_blob#update StreamAnalyticsStreamInputBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputBlobSerializationOutputReference <a name="StreamAnalyticsStreamInputBlobSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlobSerializationOutputReference;

new StreamAnalyticsStreamInputBlobSerializationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerializationOutputReference.property.internalValue"></a>

```java
public StreamAnalyticsStreamInputBlobSerialization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobSerialization">StreamAnalyticsStreamInputBlobSerialization</a>

---


### StreamAnalyticsStreamInputBlobTimeoutsOutputReference <a name="StreamAnalyticsStreamInputBlobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_stream_input_blob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference;

new StreamAnalyticsStreamInputBlobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputBlob.StreamAnalyticsStreamInputBlobTimeouts">StreamAnalyticsStreamInputBlobTimeouts</a>

---



