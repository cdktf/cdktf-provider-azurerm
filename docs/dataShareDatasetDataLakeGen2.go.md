# `azurerm_data_share_dataset_data_lake_gen2`

Refer to the Terraform Registory for docs: [`azurerm_data_share_dataset_data_lake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2).

# `dataShareDatasetDataLakeGen2` Submodule <a name="`dataShareDatasetDataLakeGen2` Submodule" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataShareDatasetDataLakeGen2 <a name="DataShareDatasetDataLakeGen2" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2 azurerm_data_share_dataset_data_lake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

datasharedatasetdatalakegen2.NewDataShareDatasetDataLakeGen2(scope Construct, id *string, config DataShareDatasetDataLakeGen2Config) DataShareDatasetDataLakeGen2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config">DataShareDatasetDataLakeGen2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config">DataShareDatasetDataLakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath">ResetFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath">ResetFolderPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts"></a>

```go
func PutTimeouts(value DataShareDatasetDataLakeGen2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

---

##### `ResetFilePath` <a name="ResetFilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFilePath"></a>

```go
func ResetFilePath()
```

##### `ResetFolderPath` <a name="ResetFolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetFolderPath"></a>

```go
func ResetFolderPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

datasharedatasetdatalakegen2.DataShareDatasetDataLakeGen2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

datasharedatasetdatalakegen2.DataShareDatasetDataLakeGen2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

datasharedatasetdatalakegen2.DataShareDatasetDataLakeGen2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput">FilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput">FileSystemNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput">FolderPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput">ShareIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName">FileSystemName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath">FolderPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId">ShareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeouts"></a>

```go
func Timeouts() DataShareDatasetDataLakeGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference">DataShareDatasetDataLakeGen2TimeoutsOutputReference</a>

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePathInput"></a>

```go
func FilePathInput() *string
```

- *Type:* *string

---

##### `FileSystemNameInput`<sup>Optional</sup> <a name="FileSystemNameInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemNameInput"></a>

```go
func FileSystemNameInput() *string
```

- *Type:* *string

---

##### `FolderPathInput`<sup>Optional</sup> <a name="FolderPathInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPathInput"></a>

```go
func FolderPathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareIdInput"></a>

```go
func ShareIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `FileSystemName`<sup>Required</sup> <a name="FileSystemName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.fileSystemName"></a>

```go
func FileSystemName() *string
```

- *Type:* *string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.folderPath"></a>

```go
func FolderPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.shareId"></a>

```go
func ShareId() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataShareDatasetDataLakeGen2Config <a name="DataShareDatasetDataLakeGen2Config" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

&datasharedatasetdatalakegen2.DataShareDatasetDataLakeGen2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FileSystemName: *string,
	Name: *string,
	ShareId: *string,
	StorageAccountId: *string,
	FilePath: *string,
	FolderPath: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName">FileSystemName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId">ShareId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath">FilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath">FolderPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FileSystemName`<sup>Required</sup> <a name="FileSystemName" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.fileSystemName"></a>

```go
FileSystemName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#file_system_name DataShareDatasetDataLakeGen2#file_system_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#name DataShareDatasetDataLakeGen2#name}.

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.shareId"></a>

```go
ShareId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#share_id DataShareDatasetDataLakeGen2#share_id}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#storage_account_id DataShareDatasetDataLakeGen2#storage_account_id}.

---

##### `FilePath`<sup>Optional</sup> <a name="FilePath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.filePath"></a>

```go
FilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#file_path DataShareDatasetDataLakeGen2#file_path}.

---

##### `FolderPath`<sup>Optional</sup> <a name="FolderPath" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.folderPath"></a>

```go
FolderPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#folder_path DataShareDatasetDataLakeGen2#folder_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#id DataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Config.property.timeouts"></a>

```go
Timeouts DataShareDatasetDataLakeGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts">DataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#timeouts DataShareDatasetDataLakeGen2#timeouts}

---

### DataShareDatasetDataLakeGen2Timeouts <a name="DataShareDatasetDataLakeGen2Timeouts" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

&datasharedatasetdatalakegen2.DataShareDatasetDataLakeGen2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#create DataShareDatasetDataLakeGen2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#delete DataShareDatasetDataLakeGen2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/data_share_dataset_data_lake_gen2#read DataShareDatasetDataLakeGen2#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataShareDatasetDataLakeGen2TimeoutsOutputReference <a name="DataShareDatasetDataLakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/datasharedatasetdatalakegen2"

datasharedatasetdatalakegen2.NewDataShareDatasetDataLakeGen2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataShareDatasetDataLakeGen2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataShareDatasetDataLakeGen2.DataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



