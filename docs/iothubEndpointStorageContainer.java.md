# `iothubEndpointStorageContainer` Submodule <a name="`iothubEndpointStorageContainer` Submodule" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointStorageContainer <a name="IothubEndpointStorageContainer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container azurerm_iothub_endpoint_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainer;

IothubEndpointStorageContainer.Builder.create(Construct scope, java.lang.String id)
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
    .containerName(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .batchFrequencyInSeconds(java.lang.Number)
//  .connectionString(java.lang.String)
//  .encoding(java.lang.String)
//  .endpointUri(java.lang.String)
//  .fileNameFormat(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .maxChunkSizeInBytes(java.lang.Number)
//  .timeouts(IothubEndpointStorageContainerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.batchFrequencyInSeconds">batchFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.fileNameFormat">fileNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.maxChunkSizeInBytes">maxChunkSizeInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.containerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `batchFrequencyInSeconds`<sup>Optional</sup> <a name="batchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.batchFrequencyInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.encoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.endpointUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `fileNameFormat`<sup>Optional</sup> <a name="fileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.fileNameFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `maxChunkSizeInBytes`<sup>Optional</sup> <a name="maxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.maxChunkSizeInBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds">resetBatchFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat">resetFileNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes">resetMaxChunkSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts"></a>

```java
public void putTimeouts(IothubEndpointStorageContainerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetBatchFrequencyInSeconds` <a name="resetBatchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetBatchFrequencyInSeconds"></a>

```java
public void resetBatchFrequencyInSeconds()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEncoding"></a>

```java
public void resetEncoding()
```

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetEndpointUri"></a>

```java
public void resetEndpointUri()
```

##### `resetFileNameFormat` <a name="resetFileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetFileNameFormat"></a>

```java
public void resetFileNameFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetIdentityId"></a>

```java
public void resetIdentityId()
```

##### `resetMaxChunkSizeInBytes` <a name="resetMaxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetMaxChunkSizeInBytes"></a>

```java
public void resetMaxChunkSizeInBytes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubEndpointStorageContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainer;

IothubEndpointStorageContainer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainer;

IothubEndpointStorageContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainer;

IothubEndpointStorageContainer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainer;

IothubEndpointStorageContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IothubEndpointStorageContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IothubEndpointStorageContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IothubEndpointStorageContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IothubEndpointStorageContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IothubEndpointStorageContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput">batchFrequencyInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput">encodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput">fileNameFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput">maxChunkSizeInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds">batchFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding">encoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat">fileNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes">maxChunkSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeouts"></a>

```java
public IothubEndpointStorageContainerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference">IothubEndpointStorageContainerTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `batchFrequencyInSecondsInput`<sup>Optional</sup> <a name="batchFrequencyInSecondsInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSecondsInput"></a>

```java
public java.lang.Number getBatchFrequencyInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encodingInput"></a>

```java
public java.lang.String getEncodingInput();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `fileNameFormatInput`<sup>Optional</sup> <a name="fileNameFormatInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormatInput"></a>

```java
public java.lang.String getFileNameFormatInput();
```

- *Type:* java.lang.String

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `maxChunkSizeInBytesInput`<sup>Optional</sup> <a name="maxChunkSizeInBytesInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytesInput"></a>

```java
public java.lang.Number getMaxChunkSizeInBytesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `batchFrequencyInSeconds`<sup>Required</sup> <a name="batchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.batchFrequencyInSeconds"></a>

```java
public java.lang.Number getBatchFrequencyInSeconds();
```

- *Type:* java.lang.Number

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `fileNameFormat`<sup>Required</sup> <a name="fileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.fileNameFormat"></a>

```java
public java.lang.String getFileNameFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `maxChunkSizeInBytes`<sup>Required</sup> <a name="maxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.maxChunkSizeInBytes"></a>

```java
public java.lang.Number getMaxChunkSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointStorageContainerConfig <a name="IothubEndpointStorageContainerConfig" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainerConfig;

IothubEndpointStorageContainerConfig.builder()
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
    .containerName(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .batchFrequencyInSeconds(java.lang.Number)
//  .connectionString(java.lang.String)
//  .encoding(java.lang.String)
//  .endpointUri(java.lang.String)
//  .fileNameFormat(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .maxChunkSizeInBytes(java.lang.Number)
//  .timeouts(IothubEndpointStorageContainerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName">containerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds">batchFrequencyInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding">encoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat">fileNameFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes">maxChunkSizeInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#container_name IothubEndpointStorageContainer#container_name}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#iothub_id IothubEndpointStorageContainer#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#name IothubEndpointStorageContainer#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#resource_group_name IothubEndpointStorageContainer#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#authentication_type IothubEndpointStorageContainer#authentication_type}.

---

##### `batchFrequencyInSeconds`<sup>Optional</sup> <a name="batchFrequencyInSeconds" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.batchFrequencyInSeconds"></a>

```java
public java.lang.Number getBatchFrequencyInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#batch_frequency_in_seconds IothubEndpointStorageContainer#batch_frequency_in_seconds}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#connection_string IothubEndpointStorageContainer#connection_string}.

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.encoding"></a>

```java
public java.lang.String getEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#encoding IothubEndpointStorageContainer#encoding}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#endpoint_uri IothubEndpointStorageContainer#endpoint_uri}.

---

##### `fileNameFormat`<sup>Optional</sup> <a name="fileNameFormat" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.fileNameFormat"></a>

```java
public java.lang.String getFileNameFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#file_name_format IothubEndpointStorageContainer#file_name_format}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#id IothubEndpointStorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#identity_id IothubEndpointStorageContainer#identity_id}.

---

##### `maxChunkSizeInBytes`<sup>Optional</sup> <a name="maxChunkSizeInBytes" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.maxChunkSizeInBytes"></a>

```java
public java.lang.Number getMaxChunkSizeInBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#max_chunk_size_in_bytes IothubEndpointStorageContainer#max_chunk_size_in_bytes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerConfig.property.timeouts"></a>

```java
public IothubEndpointStorageContainerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#timeouts IothubEndpointStorageContainer#timeouts}

---

### IothubEndpointStorageContainerTimeouts <a name="IothubEndpointStorageContainerTimeouts" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainerTimeouts;

IothubEndpointStorageContainerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#create IothubEndpointStorageContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#delete IothubEndpointStorageContainer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#read IothubEndpointStorageContainer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/iothub_endpoint_storage_container#update IothubEndpointStorageContainer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointStorageContainerTimeoutsOutputReference <a name="IothubEndpointStorageContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_endpoint_storage_container.IothubEndpointStorageContainerTimeoutsOutputReference;

new IothubEndpointStorageContainerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubEndpointStorageContainer.IothubEndpointStorageContainerTimeouts">IothubEndpointStorageContainerTimeouts</a>

---



