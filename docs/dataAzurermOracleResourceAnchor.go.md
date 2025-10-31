# `dataAzurermOracleResourceAnchor` Submodule <a name="`dataAzurermOracleResourceAnchor` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleResourceAnchor <a name="DataAzurermOracleResourceAnchor" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor azurerm_oracle_resource_anchor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.NewDataAzurermOracleResourceAnchor(scope Construct, id *string, config DataAzurermOracleResourceAnchorConfig) DataAzurermOracleResourceAnchor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig">DataAzurermOracleResourceAnchorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig">DataAzurermOracleResourceAnchorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleResourceAnchorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleResourceAnchor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchor_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermOracleResourceAnchor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleResourceAnchor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleResourceAnchor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleResourceAnchor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.linkedCompartmentId">LinkedCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference">DataAzurermOracleResourceAnchorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LinkedCompartmentId`<sup>Required</sup> <a name="LinkedCompartmentId" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.linkedCompartmentId"></a>

```go
func LinkedCompartmentId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleResourceAnchorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference">DataAzurermOracleResourceAnchorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleResourceAnchorConfig <a name="DataAzurermOracleResourceAnchorConfig" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

&dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchorConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#name DataAzurermOracleResourceAnchor#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#resource_group_name DataAzurermOracleResourceAnchor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#id DataAzurermOracleResourceAnchor#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#name DataAzurermOracleResourceAnchor#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#resource_group_name DataAzurermOracleResourceAnchor#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#id DataAzurermOracleResourceAnchor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleResourceAnchorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts">DataAzurermOracleResourceAnchorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#timeouts DataAzurermOracleResourceAnchor#timeouts}

---

### DataAzurermOracleResourceAnchorTimeouts <a name="DataAzurermOracleResourceAnchorTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

&dataazurermoracleresourceanchor.DataAzurermOracleResourceAnchorTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#read DataAzurermOracleResourceAnchor#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.51.0/docs/data-sources/oracle_resource_anchor#read DataAzurermOracleResourceAnchor#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleResourceAnchorTimeoutsOutputReference <a name="DataAzurermOracleResourceAnchorTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleresourceanchor"

dataazurermoracleresourceanchor.NewDataAzurermOracleResourceAnchorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleResourceAnchorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleResourceAnchor.DataAzurermOracleResourceAnchorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



