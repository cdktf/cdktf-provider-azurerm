# `dataAzurermStorageTableEntities` Submodule <a name="`dataAzurermStorageTableEntities` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageTableEntities <a name="DataAzurermStorageTableEntities" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities azurerm_storage_table_entities}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.NewDataAzurermStorageTableEntities(scope Construct, id *string, config DataAzurermStorageTableEntitiesConfig) DataAzurermStorageTableEntities
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig">DataAzurermStorageTableEntitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig">DataAzurermStorageTableEntitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetSelect">ResetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermStorageTableEntitiesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts">DataAzurermStorageTableEntitiesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetId"></a>

```go
func ResetId()
```

##### `ResetSelect` <a name="ResetSelect" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetSelect"></a>

```go
func ResetSelect()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStorageTableEntities resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.DataAzurermStorageTableEntities_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.DataAzurermStorageTableEntities_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.DataAzurermStorageTableEntities_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.DataAzurermStorageTableEntities_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermStorageTableEntities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermStorageTableEntities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermStorageTableEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageTableEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.items">Items</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList">DataAzurermStorageTableEntitiesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference">DataAzurermStorageTableEntitiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.selectInput">SelectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.select">Select</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.items"></a>

```go
func Items() DataAzurermStorageTableEntitiesItemsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList">DataAzurermStorageTableEntitiesItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.timeouts"></a>

```go
func Timeouts() DataAzurermStorageTableEntitiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference">DataAzurermStorageTableEntitiesTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SelectInput`<sup>Optional</sup> <a name="SelectInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.selectInput"></a>

```go
func SelectInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Select`<sup>Required</sup> <a name="Select" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.select"></a>

```go
func Select() *[]*string
```

- *Type:* *[]*string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntities.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageTableEntitiesConfig <a name="DataAzurermStorageTableEntitiesConfig" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

&dataazurermstoragetableentities.DataAzurermStorageTableEntitiesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	StorageAccountName: *string,
	TableName: *string,
	Id: *string,
	Select: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#filter DataAzurermStorageTableEntities#filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#storage_account_name DataAzurermStorageTableEntities#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#table_name DataAzurermStorageTableEntities#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#id DataAzurermStorageTableEntities#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.select">Select</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#select DataAzurermStorageTableEntities#select}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts">DataAzurermStorageTableEntitiesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#filter DataAzurermStorageTableEntities#filter}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#storage_account_name DataAzurermStorageTableEntities#storage_account_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#table_name DataAzurermStorageTableEntities#table_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#id DataAzurermStorageTableEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Select`<sup>Optional</sup> <a name="Select" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.select"></a>

```go
Select *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#select DataAzurermStorageTableEntities#select}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesConfig.property.timeouts"></a>

```go
Timeouts DataAzurermStorageTableEntitiesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts">DataAzurermStorageTableEntitiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#timeouts DataAzurermStorageTableEntities#timeouts}

---

### DataAzurermStorageTableEntitiesItems <a name="DataAzurermStorageTableEntitiesItems" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

&dataazurermstoragetableentities.DataAzurermStorageTableEntitiesItems {

}
```


### DataAzurermStorageTableEntitiesTimeouts <a name="DataAzurermStorageTableEntitiesTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

&dataazurermstoragetableentities.DataAzurermStorageTableEntitiesTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#read DataAzurermStorageTableEntities#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/storage_table_entities#read DataAzurermStorageTableEntities#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageTableEntitiesItemsList <a name="DataAzurermStorageTableEntitiesItemsList" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.NewDataAzurermStorageTableEntitiesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermStorageTableEntitiesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.get"></a>

```go
func Get(index *f64) DataAzurermStorageTableEntitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermStorageTableEntitiesItemsOutputReference <a name="DataAzurermStorageTableEntitiesItemsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.NewDataAzurermStorageTableEntitiesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermStorageTableEntitiesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.properties">Properties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.rowKey">RowKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItems">DataAzurermStorageTableEntitiesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.properties"></a>

```go
func Properties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `RowKey`<sup>Required</sup> <a name="RowKey" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.rowKey"></a>

```go
func RowKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermStorageTableEntitiesItems
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesItems">DataAzurermStorageTableEntitiesItems</a>

---


### DataAzurermStorageTableEntitiesTimeoutsOutputReference <a name="DataAzurermStorageTableEntitiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermstoragetableentities"

dataazurermstoragetableentities.NewDataAzurermStorageTableEntitiesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermStorageTableEntitiesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageTableEntities.DataAzurermStorageTableEntitiesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



