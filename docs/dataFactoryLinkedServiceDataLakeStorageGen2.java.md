# `dataFactoryLinkedServiceDataLakeStorageGen2` Submodule <a name="`dataFactoryLinkedServiceDataLakeStorageGen2` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2 <a name="DataFactoryLinkedServiceDataLakeStorageGen2" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2 azurerm_data_factory_linked_service_data_lake_storage_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2;

DataFactoryLinkedServiceDataLakeStorageGen2.Builder.create(Construct scope, java.lang.String id)
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .servicePrincipalId(java.lang.String)
//  .servicePrincipalKey(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .tenant(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceDataLakeStorageGen2Timeouts)
//  .useManagedIdentity(java.lang.Boolean)
//  .useManagedIdentity(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalKey">servicePrincipalKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.tenant">tenant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.useManagedIdentity">useManagedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.additionalProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.integrationRuntimeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.servicePrincipalKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.storageAccountKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.tenant"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `useManagedIdentity`<sup>Optional</sup> <a name="useManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.Initializer.parameter.useManagedIdentity"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey">resetServicePrincipalKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey">resetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant">resetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity">resetUseManagedIdentity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryLinkedServiceDataLakeStorageGen2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetIntegrationRuntimeName"></a>

```java
public void resetIntegrationRuntimeName()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalId"></a>

```java
public void resetServicePrincipalId()
```

##### `resetServicePrincipalKey` <a name="resetServicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetServicePrincipalKey"></a>

```java
public void resetServicePrincipalKey()
```

##### `resetStorageAccountKey` <a name="resetStorageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetStorageAccountKey"></a>

```java
public void resetStorageAccountKey()
```

##### `resetTenant` <a name="resetTenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTenant"></a>

```java
public void resetTenant()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseManagedIdentity` <a name="resetUseManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.resetUseManagedIdentity"></a>

```java
public void resetUseManagedIdentity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2;

DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2;

DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2;

DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2;

DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataFactoryLinkedServiceDataLakeStorageGen2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryLinkedServiceDataLakeStorageGen2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryLinkedServiceDataLakeStorageGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceDataLakeStorageGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput">servicePrincipalKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput">storageAccountKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput">tenantInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput">useManagedIdentityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity">useManagedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeouts"></a>

```java
public DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference">DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeNameInput"></a>

```java
public java.lang.String getIntegrationRuntimeNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalIdInput"></a>

```java
public java.lang.String getServicePrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalKeyInput`<sup>Optional</sup> <a name="servicePrincipalKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKeyInput"></a>

```java
public java.lang.String getServicePrincipalKeyInput();
```

- *Type:* java.lang.String

---

##### `storageAccountKeyInput`<sup>Optional</sup> <a name="storageAccountKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKeyInput"></a>

```java
public java.lang.String getStorageAccountKeyInput();
```

- *Type:* java.lang.String

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenantInput"></a>

```java
public java.lang.String getTenantInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `useManagedIdentityInput`<sup>Optional</sup> <a name="useManagedIdentityInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentityInput"></a>

```java
public java.lang.Object getUseManagedIdentityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalKey`<sup>Required</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.servicePrincipalKey"></a>

```java
public java.lang.String getServicePrincipalKey();
```

- *Type:* java.lang.String

---

##### `storageAccountKey`<sup>Required</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `useManagedIdentity`<sup>Required</sup> <a name="useManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.useManagedIdentity"></a>

```java
public java.lang.Object getUseManagedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2Config <a name="DataFactoryLinkedServiceDataLakeStorageGen2Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2Config;

DataFactoryLinkedServiceDataLakeStorageGen2Config.builder()
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
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
    .url(java.lang.String)
//  .additionalProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .integrationRuntimeName(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .servicePrincipalId(java.lang.String)
//  .servicePrincipalKey(java.lang.String)
//  .storageAccountKey(java.lang.String)
//  .tenant(java.lang.String)
//  .timeouts(DataFactoryLinkedServiceDataLakeStorageGen2Timeouts)
//  .useManagedIdentity(java.lang.Boolean)
//  .useManagedIdentity(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties">additionalProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey">servicePrincipalKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey">storageAccountKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant">tenant</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity">useManagedIdentity</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#data_factory_id DataFactoryLinkedServiceDataLakeStorageGen2#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#name DataFactoryLinkedServiceDataLakeStorageGen2#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#url DataFactoryLinkedServiceDataLakeStorageGen2#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.additionalProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#additional_properties DataFactoryLinkedServiceDataLakeStorageGen2#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#annotations DataFactoryLinkedServiceDataLakeStorageGen2#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#description DataFactoryLinkedServiceDataLakeStorageGen2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#id DataFactoryLinkedServiceDataLakeStorageGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.integrationRuntimeName"></a>

```java
public java.lang.String getIntegrationRuntimeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#integration_runtime_name DataFactoryLinkedServiceDataLakeStorageGen2#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#parameters DataFactoryLinkedServiceDataLakeStorageGen2#parameters}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalId"></a>

```java
public java.lang.String getServicePrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_id DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_id}.

---

##### `servicePrincipalKey`<sup>Optional</sup> <a name="servicePrincipalKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.servicePrincipalKey"></a>

```java
public java.lang.String getServicePrincipalKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#service_principal_key DataFactoryLinkedServiceDataLakeStorageGen2#service_principal_key}.

---

##### `storageAccountKey`<sup>Optional</sup> <a name="storageAccountKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.storageAccountKey"></a>

```java
public java.lang.String getStorageAccountKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#storage_account_key DataFactoryLinkedServiceDataLakeStorageGen2#storage_account_key}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#tenant DataFactoryLinkedServiceDataLakeStorageGen2#tenant}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.timeouts"></a>

```java
public DataFactoryLinkedServiceDataLakeStorageGen2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#timeouts DataFactoryLinkedServiceDataLakeStorageGen2#timeouts}

---

##### `useManagedIdentity`<sup>Optional</sup> <a name="useManagedIdentity" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Config.property.useManagedIdentity"></a>

```java
public java.lang.Object getUseManagedIdentity();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#use_managed_identity DataFactoryLinkedServiceDataLakeStorageGen2#use_managed_identity}.

---

### DataFactoryLinkedServiceDataLakeStorageGen2Timeouts <a name="DataFactoryLinkedServiceDataLakeStorageGen2Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts;

DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#create DataFactoryLinkedServiceDataLakeStorageGen2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#delete DataFactoryLinkedServiceDataLakeStorageGen2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#read DataFactoryLinkedServiceDataLakeStorageGen2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/data_factory_linked_service_data_lake_storage_gen2#update DataFactoryLinkedServiceDataLakeStorageGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference <a name="DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_factory_linked_service_data_lake_storage_gen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference;

new DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceDataLakeStorageGen2.DataFactoryLinkedServiceDataLakeStorageGen2Timeouts">DataFactoryLinkedServiceDataLakeStorageGen2Timeouts</a>

---



