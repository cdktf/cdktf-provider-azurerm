# `data_azurerm_managed_disk`

Refer to the Terraform Registory for docs: [`data_azurerm_managed_disk`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk).

# `dataAzurermManagedDisk` Submodule <a name="`dataAzurermManagedDisk` Submodule" id="@cdktf/provider-azurerm.dataAzurermManagedDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedDisk <a name="DataAzurermManagedDisk" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk azurerm_managed_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDisk(scope Construct, id *string, config DataAzurermManagedDiskConfig) DataAzurermManagedDisk
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig">DataAzurermManagedDiskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig">DataAzurermManagedDiskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermManagedDiskTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts">DataAzurermManagedDiskTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.DataAzurermManagedDisk_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.DataAzurermManagedDisk_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.DataAzurermManagedDisk_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.createOption">CreateOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskAccessId">DiskAccessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskEncryptionSetId">DiskEncryptionSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskIopsReadWrite">DiskIopsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskMbpsReadWrite">DiskMbpsReadWrite</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList">DataAzurermManagedDiskEncryptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.imageReferenceId">ImageReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.networkAccessPolicy">NetworkAccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.sourceUri">SourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.storageAccountType">StorageAccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference">DataAzurermManagedDiskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.createOption"></a>

```go
func CreateOption() *string
```

- *Type:* *string

---

##### `DiskAccessId`<sup>Required</sup> <a name="DiskAccessId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskAccessId"></a>

```go
func DiskAccessId() *string
```

- *Type:* *string

---

##### `DiskEncryptionSetId`<sup>Required</sup> <a name="DiskEncryptionSetId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskEncryptionSetId"></a>

```go
func DiskEncryptionSetId() *string
```

- *Type:* *string

---

##### `DiskIopsReadWrite`<sup>Required</sup> <a name="DiskIopsReadWrite" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskIopsReadWrite"></a>

```go
func DiskIopsReadWrite() *f64
```

- *Type:* *f64

---

##### `DiskMbpsReadWrite`<sup>Required</sup> <a name="DiskMbpsReadWrite" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskMbpsReadWrite"></a>

```go
func DiskMbpsReadWrite() *f64
```

- *Type:* *f64

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EncryptionSettings`<sup>Required</sup> <a name="EncryptionSettings" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.encryptionSettings"></a>

```go
func EncryptionSettings() DataAzurermManagedDiskEncryptionSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList">DataAzurermManagedDiskEncryptionSettingsList</a>

---

##### `ImageReferenceId`<sup>Required</sup> <a name="ImageReferenceId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.imageReferenceId"></a>

```go
func ImageReferenceId() *string
```

- *Type:* *string

---

##### `NetworkAccessPolicy`<sup>Required</sup> <a name="NetworkAccessPolicy" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.networkAccessPolicy"></a>

```go
func NetworkAccessPolicy() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.sourceUri"></a>

```go
func SourceUri() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.storageAccountType"></a>

```go
func StorageAccountType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.timeouts"></a>

```go
func Timeouts() DataAzurermManagedDiskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference">DataAzurermManagedDiskTimeoutsOutputReference</a>

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDisk.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedDiskConfig <a name="DataAzurermManagedDiskConfig" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

&dataazurermmanageddisk.DataAzurermManagedDiskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#name DataAzurermManagedDisk#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#resource_group_name DataAzurermManagedDisk#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#id DataAzurermManagedDisk#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts">DataAzurermManagedDiskTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#name DataAzurermManagedDisk#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#resource_group_name DataAzurermManagedDisk#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#id DataAzurermManagedDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskConfig.property.timeouts"></a>

```go
Timeouts DataAzurermManagedDiskTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts">DataAzurermManagedDiskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#timeouts DataAzurermManagedDisk#timeouts}

---

### DataAzurermManagedDiskEncryptionSettings <a name="DataAzurermManagedDiskEncryptionSettings" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

&dataazurermmanageddisk.DataAzurermManagedDiskEncryptionSettings {

}
```


### DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey <a name="DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

&dataazurermmanageddisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey {

}
```


### DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey <a name="DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

&dataazurermmanageddisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey {

}
```


### DataAzurermManagedDiskTimeouts <a name="DataAzurermManagedDiskTimeouts" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

&dataazurermmanageddisk.DataAzurermManagedDiskTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#read DataAzurermManagedDisk#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/managed_disk#read DataAzurermManagedDisk#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList <a name="DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference <a name="DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl">SecretUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey">DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.secretUrl"></a>

```go
func SecretUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey">DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKey</a>

---


### DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList <a name="DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference <a name="DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl">KeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId">SourceVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey">DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyUrl`<sup>Required</sup> <a name="KeyUrl" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.keyUrl"></a>

```go
func KeyUrl() *string
```

- *Type:* *string

---

##### `SourceVaultId`<sup>Required</sup> <a name="SourceVaultId" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.sourceVaultId"></a>

```go
func SourceVaultId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey">DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKey</a>

---


### DataAzurermManagedDiskEncryptionSettingsList <a name="DataAzurermManagedDiskEncryptionSettingsList" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermManagedDiskEncryptionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.get"></a>

```go
func Get(index *f64) DataAzurermManagedDiskEncryptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermManagedDiskEncryptionSettingsOutputReference <a name="DataAzurermManagedDiskEncryptionSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermManagedDiskEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList">DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey">KeyEncryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList">DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettings">DataAzurermManagedDiskEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList">DataAzurermManagedDiskEncryptionSettingsDiskEncryptionKeyList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeyEncryptionKey`<sup>Required</sup> <a name="KeyEncryptionKey" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.keyEncryptionKey"></a>

```go
func KeyEncryptionKey() DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList">DataAzurermManagedDiskEncryptionSettingsKeyEncryptionKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermManagedDiskEncryptionSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskEncryptionSettings">DataAzurermManagedDiskEncryptionSettings</a>

---


### DataAzurermManagedDiskTimeoutsOutputReference <a name="DataAzurermManagedDiskTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermmanageddisk"

dataazurermmanageddisk.NewDataAzurermManagedDiskTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermManagedDiskTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermManagedDisk.DataAzurermManagedDiskTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



