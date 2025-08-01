# `machineLearningDatastoreBlobstorage` Submodule <a name="`machineLearningDatastoreBlobstorage` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreBlobstorage <a name="MachineLearningDatastoreBlobstorage" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage azurerm_machine_learning_datastore_blobstorage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorage;

MachineLearningDatastoreBlobstorage.Builder.create(Construct scope, java.lang.String id)
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
    .storageContainerId(java.lang.String)
    .workspaceId(java.lang.String)
//  .accountKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .serviceDataAuthIdentity(java.lang.String)
//  .sharedAccessSignature(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MachineLearningDatastoreBlobstorageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.serviceDataAuthIdentity">serviceDataAuthIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.sharedAccessSignature">sharedAccessSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.storageContainerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.accountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `serviceDataAuthIdentity`<sup>Optional</sup> <a name="serviceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.serviceDataAuthIdentity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `sharedAccessSignature`<sup>Optional</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.sharedAccessSignature"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity">resetServiceDataAuthIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature">resetSharedAccessSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts"></a>

```java
public void putTimeouts(MachineLearningDatastoreBlobstorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---

##### `resetAccountKey` <a name="resetAccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetAccountKey"></a>

```java
public void resetAccountKey()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetServiceDataAuthIdentity` <a name="resetServiceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetServiceDataAuthIdentity"></a>

```java
public void resetServiceDataAuthIdentity()
```

##### `resetSharedAccessSignature` <a name="resetSharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetSharedAccessSignature"></a>

```java
public void resetSharedAccessSignature()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorage;

MachineLearningDatastoreBlobstorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorage;

MachineLearningDatastoreBlobstorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorage;

MachineLearningDatastoreBlobstorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorage;

MachineLearningDatastoreBlobstorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MachineLearningDatastoreBlobstorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MachineLearningDatastoreBlobstorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MachineLearningDatastoreBlobstorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MachineLearningDatastoreBlobstorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningDatastoreBlobstorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput">accountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput">serviceDataAuthIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput">sharedAccessSignatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput">storageContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity">serviceDataAuthIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeouts"></a>

```java
public MachineLearningDatastoreBlobstorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference">MachineLearningDatastoreBlobstorageTimeoutsOutputReference</a>

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKeyInput"></a>

```java
public java.lang.String getAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceDataAuthIdentityInput`<sup>Optional</sup> <a name="serviceDataAuthIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentityInput"></a>

```java
public java.lang.String getServiceDataAuthIdentityInput();
```

- *Type:* java.lang.String

---

##### `sharedAccessSignatureInput`<sup>Optional</sup> <a name="sharedAccessSignatureInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignatureInput"></a>

```java
public java.lang.String getSharedAccessSignatureInput();
```

- *Type:* java.lang.String

---

##### `storageContainerIdInput`<sup>Optional</sup> <a name="storageContainerIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerIdInput"></a>

```java
public java.lang.String getStorageContainerIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceDataAuthIdentity`<sup>Required</sup> <a name="serviceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.serviceDataAuthIdentity"></a>

```java
public java.lang.String getServiceDataAuthIdentity();
```

- *Type:* java.lang.String

---

##### `sharedAccessSignature`<sup>Required</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.sharedAccessSignature"></a>

```java
public java.lang.String getSharedAccessSignature();
```

- *Type:* java.lang.String

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreBlobstorageConfig <a name="MachineLearningDatastoreBlobstorageConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorageConfig;

MachineLearningDatastoreBlobstorageConfig.builder()
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
    .storageContainerId(java.lang.String)
    .workspaceId(java.lang.String)
//  .accountKey(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .serviceDataAuthIdentity(java.lang.String)
//  .sharedAccessSignature(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MachineLearningDatastoreBlobstorageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId">storageContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity">serviceDataAuthIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature">sharedAccessSignature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#name MachineLearningDatastoreBlobstorage#name}.

---

##### `storageContainerId`<sup>Required</sup> <a name="storageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.storageContainerId"></a>

```java
public java.lang.String getStorageContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#storage_container_id MachineLearningDatastoreBlobstorage#storage_container_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#workspace_id MachineLearningDatastoreBlobstorage#workspace_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#account_key MachineLearningDatastoreBlobstorage#account_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#description MachineLearningDatastoreBlobstorage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#id MachineLearningDatastoreBlobstorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#is_default MachineLearningDatastoreBlobstorage#is_default}.

---

##### `serviceDataAuthIdentity`<sup>Optional</sup> <a name="serviceDataAuthIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.serviceDataAuthIdentity"></a>

```java
public java.lang.String getServiceDataAuthIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#service_data_auth_identity MachineLearningDatastoreBlobstorage#service_data_auth_identity}.

---

##### `sharedAccessSignature`<sup>Optional</sup> <a name="sharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.sharedAccessSignature"></a>

```java
public java.lang.String getSharedAccessSignature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#shared_access_signature MachineLearningDatastoreBlobstorage#shared_access_signature}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#tags MachineLearningDatastoreBlobstorage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageConfig.property.timeouts"></a>

```java
public MachineLearningDatastoreBlobstorageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#timeouts MachineLearningDatastoreBlobstorage#timeouts}

---

### MachineLearningDatastoreBlobstorageTimeouts <a name="MachineLearningDatastoreBlobstorageTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorageTimeouts;

MachineLearningDatastoreBlobstorageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#create MachineLearningDatastoreBlobstorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#delete MachineLearningDatastoreBlobstorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#read MachineLearningDatastoreBlobstorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/resources/machine_learning_datastore_blobstorage#update MachineLearningDatastoreBlobstorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreBlobstorageTimeoutsOutputReference <a name="MachineLearningDatastoreBlobstorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.machine_learning_datastore_blobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference;

new MachineLearningDatastoreBlobstorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.machineLearningDatastoreBlobstorage.MachineLearningDatastoreBlobstorageTimeouts">MachineLearningDatastoreBlobstorageTimeouts</a>

---



