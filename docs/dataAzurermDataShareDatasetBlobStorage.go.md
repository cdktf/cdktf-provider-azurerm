# `data_azurerm_data_share_dataset_blob_storage`

Refer to the Terraform Registory for docs: [`data_azurerm_data_share_dataset_blob_storage`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage).

# `dataAzurermDataShareDatasetBlobStorage` Submodule <a name="`dataAzurermDataShareDatasetBlobStorage` Submodule" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetBlobStorage <a name="DataAzurermDataShareDatasetBlobStorage" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage azurerm_data_share_dataset_blob_storage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.NewDataAzurermDataShareDatasetBlobStorage(scope Construct, id *string, config DataAzurermDataShareDatasetBlobStorageConfig) DataAzurermDataShareDatasetBlobStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig">DataAzurermDataShareDatasetBlobStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig">DataAzurermDataShareDatasetBlobStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermDataShareDatasetBlobStorageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.folderPath">FolderPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.storageAccount">StorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList">DataAzurermDataShareDatasetBlobStorageStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference">DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareIdInput">DataShareIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareId">DataShareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.folderPath"></a>

```go
func FolderPath() *string
```

- *Type:* *string

---

##### `StorageAccount`<sup>Required</sup> <a name="StorageAccount" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.storageAccount"></a>

```go
func StorageAccount() DataAzurermDataShareDatasetBlobStorageStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList">DataAzurermDataShareDatasetBlobStorageStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeouts"></a>

```go
func Timeouts() DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference">DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference</a>

---

##### `DataShareIdInput`<sup>Optional</sup> <a name="DataShareIdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareIdInput"></a>

```go
func DataShareIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.dataShareId"></a>

```go
func DataShareId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetBlobStorageConfig <a name="DataAzurermDataShareDatasetBlobStorageConfig" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

&dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataShareId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dataShareId">DataShareId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#data_share_id DataAzurermDataShareDatasetBlobStorage#data_share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#name DataAzurermDataShareDatasetBlobStorage#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#id DataAzurermDataShareDatasetBlobStorage#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataShareId`<sup>Required</sup> <a name="DataShareId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.dataShareId"></a>

```go
DataShareId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#data_share_id DataAzurermDataShareDatasetBlobStorage#data_share_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#name DataAzurermDataShareDatasetBlobStorage#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#id DataAzurermDataShareDatasetBlobStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageConfig.property.timeouts"></a>

```go
Timeouts DataAzurermDataShareDatasetBlobStorageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts">DataAzurermDataShareDatasetBlobStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#timeouts DataAzurermDataShareDatasetBlobStorage#timeouts}

---

### DataAzurermDataShareDatasetBlobStorageStorageAccount <a name="DataAzurermDataShareDatasetBlobStorageStorageAccount" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

&dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorageStorageAccount {

}
```


### DataAzurermDataShareDatasetBlobStorageTimeouts <a name="DataAzurermDataShareDatasetBlobStorageTimeouts" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

&dataazurermdatasharedatasetblobstorage.DataAzurermDataShareDatasetBlobStorageTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#read DataAzurermDataShareDatasetBlobStorage#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/data-sources/data_share_dataset_blob_storage#read DataAzurermDataShareDatasetBlobStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetBlobStorageStorageAccountList <a name="DataAzurermDataShareDatasetBlobStorageStorageAccountList" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.NewDataAzurermDataShareDatasetBlobStorageStorageAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermDataShareDatasetBlobStorageStorageAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get"></a>

```go
func Get(index *f64) DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference <a name="DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.NewDataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount">DataAzurermDataShareDatasetBlobStorageStorageAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermDataShareDatasetBlobStorageStorageAccount
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageStorageAccount">DataAzurermDataShareDatasetBlobStorageStorageAccount</a>

---


### DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference <a name="DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/dataazurermdatasharedatasetblobstorage"

dataazurermdatasharedatasetblobstorage.NewDataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermDataShareDatasetBlobStorage.DataAzurermDataShareDatasetBlobStorageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



