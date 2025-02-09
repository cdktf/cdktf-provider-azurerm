# `dataAzurermOracleDbSystemShapes` Submodule <a name="`dataAzurermOracleDbSystemShapes` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDbSystemShapes <a name="DataAzurermOracleDbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes azurerm_oracle_db_system_shapes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.NewDataAzurermOracleDbSystemShapes(scope Construct, id *string, config DataAzurermOracleDbSystemShapesConfig) DataAzurermOracleDbSystemShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig">DataAzurermOracleDbSystemShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig">DataAzurermOracleDbSystemShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleDbSystemShapesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermOracleDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleDbSystemShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dbSystemShapes">DbSystemShapes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList">DataAzurermOracleDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference">DataAzurermOracleDbSystemShapesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.location">Location</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystemShapes`<sup>Required</sup> <a name="DbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.dbSystemShapes"></a>

```go
func DbSystemShapes() DataAzurermOracleDbSystemShapesDbSystemShapesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList">DataAzurermOracleDbSystemShapesDbSystemShapesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleDbSystemShapesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference">DataAzurermOracleDbSystemShapesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDbSystemShapesConfig <a name="DataAzurermOracleDbSystemShapesConfig" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

&dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#location DataAzurermOracleDbSystemShapes#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#id DataAzurermOracleDbSystemShapes#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#location DataAzurermOracleDbSystemShapes#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#id DataAzurermOracleDbSystemShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleDbSystemShapesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts">DataAzurermOracleDbSystemShapesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#timeouts DataAzurermOracleDbSystemShapes#timeouts}

---

### DataAzurermOracleDbSystemShapesDbSystemShapes <a name="DataAzurermOracleDbSystemShapesDbSystemShapes" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

&dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapesDbSystemShapes {

}
```


### DataAzurermOracleDbSystemShapesTimeouts <a name="DataAzurermOracleDbSystemShapesTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

&dataazurermoracledbsystemshapes.DataAzurermOracleDbSystemShapesTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#read DataAzurermOracleDbSystemShapes#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/data-sources/oracle_db_system_shapes#read DataAzurermOracleDbSystemShapes#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDbSystemShapesDbSystemShapesList <a name="DataAzurermOracleDbSystemShapesDbSystemShapesList" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.NewDataAzurermOracleDbSystemShapesDbSystemShapesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleDbSystemShapesDbSystemShapesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get"></a>

```go
func Get(index *f64) DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference <a name="DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.NewDataAzurermOracleDbSystemShapesDbSystemShapesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">AvailableCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">AvailableCoreCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">AvailableDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">AvailableDataStoragePerServerInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">AvailableDbNodePerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">AvailableDbNodeStorageInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">AvailableMemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">AvailableMemoryPerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">CoreCountIncrement</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">MaximumNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumStorageCount">MaximumStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">MinimumCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCountPerNode">MinimumCoreCountPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDataStorageInTbs">MinimumDataStorageInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDbNodeStoragePerNodeInGbs">MinimumDbNodeStoragePerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumMemoryPerNodeInGbs">MinimumMemoryPerNodeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">MinimumNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumStorageCount">MinimumStorageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount">RuntimeMinimumCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes">DataAzurermOracleDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableCoreCount`<sup>Required</sup> <a name="AvailableCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```go
func AvailableCoreCount() *f64
```

- *Type:* *f64

---

##### `AvailableCoreCountPerNode`<sup>Required</sup> <a name="AvailableCoreCountPerNode" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```go
func AvailableCoreCountPerNode() *f64
```

- *Type:* *f64

---

##### `AvailableDataStorageInTbs`<sup>Required</sup> <a name="AvailableDataStorageInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```go
func AvailableDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `AvailableDataStoragePerServerInTbs`<sup>Required</sup> <a name="AvailableDataStoragePerServerInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```go
func AvailableDataStoragePerServerInTbs() *f64
```

- *Type:* *f64

---

##### `AvailableDbNodePerNodeInGbs`<sup>Required</sup> <a name="AvailableDbNodePerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```go
func AvailableDbNodePerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableDbNodeStorageInGbs`<sup>Required</sup> <a name="AvailableDbNodeStorageInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```go
func AvailableDbNodeStorageInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableMemoryInGbs`<sup>Required</sup> <a name="AvailableMemoryInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```go
func AvailableMemoryInGbs() *f64
```

- *Type:* *f64

---

##### `AvailableMemoryPerNodeInGbs`<sup>Required</sup> <a name="AvailableMemoryPerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```go
func AvailableMemoryPerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `CoreCountIncrement`<sup>Required</sup> <a name="CoreCountIncrement" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```go
func CoreCountIncrement() *f64
```

- *Type:* *f64

---

##### `MaximumNodeCount`<sup>Required</sup> <a name="MaximumNodeCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```go
func MaximumNodeCount() *f64
```

- *Type:* *f64

---

##### `MaximumStorageCount`<sup>Required</sup> <a name="MaximumStorageCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.maximumStorageCount"></a>

```go
func MaximumStorageCount() *f64
```

- *Type:* *f64

---

##### `MinimumCoreCount`<sup>Required</sup> <a name="MinimumCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```go
func MinimumCoreCount() *f64
```

- *Type:* *f64

---

##### `MinimumCoreCountPerNode`<sup>Required</sup> <a name="MinimumCoreCountPerNode" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCountPerNode"></a>

```go
func MinimumCoreCountPerNode() *f64
```

- *Type:* *f64

---

##### `MinimumDataStorageInTbs`<sup>Required</sup> <a name="MinimumDataStorageInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDataStorageInTbs"></a>

```go
func MinimumDataStorageInTbs() *f64
```

- *Type:* *f64

---

##### `MinimumDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="MinimumDbNodeStoragePerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumDbNodeStoragePerNodeInGbs"></a>

```go
func MinimumDbNodeStoragePerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `MinimumMemoryPerNodeInGbs`<sup>Required</sup> <a name="MinimumMemoryPerNodeInGbs" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumMemoryPerNodeInGbs"></a>

```go
func MinimumMemoryPerNodeInGbs() *f64
```

- *Type:* *f64

---

##### `MinimumNodeCount`<sup>Required</sup> <a name="MinimumNodeCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```go
func MinimumNodeCount() *f64
```

- *Type:* *f64

---

##### `MinimumStorageCount`<sup>Required</sup> <a name="MinimumStorageCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.minimumStorageCount"></a>

```go
func MinimumStorageCount() *f64
```

- *Type:* *f64

---

##### `RuntimeMinimumCoreCount`<sup>Required</sup> <a name="RuntimeMinimumCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount"></a>

```go
func RuntimeMinimumCoreCount() *f64
```

- *Type:* *f64

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```go
func ShapeFamily() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleDbSystemShapesDbSystemShapes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesDbSystemShapes">DataAzurermOracleDbSystemShapesDbSystemShapes</a>

---


### DataAzurermOracleDbSystemShapesTimeoutsOutputReference <a name="DataAzurermOracleDbSystemShapesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/dataazurermoracledbsystemshapes"

dataazurermoracledbsystemshapes.NewDataAzurermOracleDbSystemShapesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleDbSystemShapesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleDbSystemShapes.DataAzurermOracleDbSystemShapesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



