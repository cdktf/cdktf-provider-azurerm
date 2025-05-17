# `dataFactoryLinkedServiceAzureFileStorage` Submodule <a name="`dataFactoryLinkedServiceAzureFileStorage` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureFileStorage <a name="DataFactoryLinkedServiceAzureFileStorage" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage azurerm_data_factory_linked_service_azure_file_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorage;

DataFactoryLinkedServiceAzureFileStorage.Builder.create(Construct scope, java.lang.String id)
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
    .connectionString(java.lang.String)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .fileShare(java.lang.String)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .keyVaultPassword(DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .password(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceAzureFileStorageTimeouts)
//  .userId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.fileShare">fileShare</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.keyVaultPassword">keyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}.

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}.

---

##### `fileShare`<sup>Optional</sup> <a name="fileShare" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.fileShare"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}.

---

##### `keyVaultPassword`<sup>Optional</sup> <a name="keyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.keyVaultPassword"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#key_vault_password DataFactoryLinkedServiceAzureFileStorage#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#timeouts DataFactoryLinkedServiceAzureFileStorage#timeouts}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword">putKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetFileShare">resetFileShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetKeyVaultPassword">resetKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyVaultPassword` <a name="putKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword"></a>

```java
public void putKeyVaultPassword(DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putKeyVaultPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedServiceAzureFileStorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFileShare` <a name="resetFileShare" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetFileShare"></a>

```java
public void resetFileShare()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetHost"></a>

```java
public void resetHost()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetIntegrationRuntimeName"></a>

```java
public void resetIntegrationRuntimeName()
```

##### `resetKeyVaultPassword` <a name="resetKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetKeyVaultPassword"></a>

```java
public void resetKeyVaultPassword()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.resetUserId"></a>

```java
public void resetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFileStorage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorage;

DataFactoryLinkedServiceAzureFileStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorage;

DataFactoryLinkedServiceAzureFileStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorage;

DataFactoryLinkedServiceAzureFileStorage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorage;

DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceAzureFileStorage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryLinkedServiceAzureFileStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryLinkedServiceAzureFileStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureFileStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPassword">keyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShareInput">fileShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPasswordInput">keyVaultPasswordInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyVaultPassword`<sup>Required</sup> <a name="keyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPassword"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference getKeyVaultPassword();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference">DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeouts"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference">DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fileShareInput`<sup>Optional</sup> <a name="fileShareInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShareInput"></a>

```java
public java.lang.String getFileShareInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeNameInput"></a>

```java
public java.lang.String getIntegrationRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `keyVaultPasswordInput`<sup>Optional</sup> <a name="keyVaultPasswordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.keyVaultPasswordInput"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword getKeyVaultPasswordInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureFileStorageConfig <a name="DataFactoryLinkedServiceAzureFileStorageConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorageConfig;

DataFactoryLinkedServiceAzureFileStorageConfig.builder()
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
    .connectionString(java.lang.String)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .fileShare(java.lang.String)
//  .host(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .keyVaultPassword(DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .password(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceAzureFileStorageTimeouts)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.keyVaultPassword">keyVaultPassword</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | key_vault_password block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#connection_string DataFactoryLinkedServiceAzureFileStorage#connection_string}.

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#data_factory_id DataFactoryLinkedServiceAzureFileStorage#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#name DataFactoryLinkedServiceAzureFileStorage#name}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#additional_properties DataFactoryLinkedServiceAzureFileStorage#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#annotations DataFactoryLinkedServiceAzureFileStorage#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#description DataFactoryLinkedServiceAzureFileStorage#description}.

---

##### `fileShare`<sup>Optional</sup> <a name="fileShare" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#file_share DataFactoryLinkedServiceAzureFileStorage#file_share}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#host DataFactoryLinkedServiceAzureFileStorage#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#id DataFactoryLinkedServiceAzureFileStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#integration_runtime_name DataFactoryLinkedServiceAzureFileStorage#integration_runtime_name}.

---

##### `keyVaultPassword`<sup>Optional</sup> <a name="keyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.keyVaultPassword"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword getKeyVaultPassword();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

key_vault_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#key_vault_password DataFactoryLinkedServiceAzureFileStorage#key_vault_password}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#parameters DataFactoryLinkedServiceAzureFileStorage#parameters}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#password DataFactoryLinkedServiceAzureFileStorage#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.timeouts"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#timeouts DataFactoryLinkedServiceAzureFileStorage#timeouts}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#user_id DataFactoryLinkedServiceAzureFileStorage#user_id}.

---

### DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword <a name="DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword;

DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.builder()
    .linkedServiceName(java.lang.String)
    .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#linked_service_name DataFactoryLinkedServiceAzureFileStorage#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#secret_name DataFactoryLinkedServiceAzureFileStorage#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#linked_service_name DataFactoryLinkedServiceAzureFileStorage#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#secret_name DataFactoryLinkedServiceAzureFileStorage#secret_name}.

---

### DataFactoryLinkedServiceAzureFileStorageTimeouts <a name="DataFactoryLinkedServiceAzureFileStorageTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorageTimeouts;

DataFactoryLinkedServiceAzureFileStorageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#create DataFactoryLinkedServiceAzureFileStorage#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#delete DataFactoryLinkedServiceAzureFileStorage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#read DataFactoryLinkedServiceAzureFileStorage#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#update DataFactoryLinkedServiceAzureFileStorage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#create DataFactoryLinkedServiceAzureFileStorage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#delete DataFactoryLinkedServiceAzureFileStorage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#read DataFactoryLinkedServiceAzureFileStorage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/data_factory_linked_service_azure_file_storage#update DataFactoryLinkedServiceAzureFileStorage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference <a name="DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference;

new DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceNameInput"></a>

```java
public java.lang.String getLinkedServiceNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.linkedServiceName"></a>

```java
public java.lang.String getLinkedServiceName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPasswordOutputReference.property.internalValue"></a>

```java
public DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword">DataFactoryLinkedServiceAzureFileStorageKeyVaultPassword</a>

---


### DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_azure_file_storage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference;

new DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFileStorage.DataFactoryLinkedServiceAzureFileStorageTimeouts">DataFactoryLinkedServiceAzureFileStorageTimeouts</a>

---



