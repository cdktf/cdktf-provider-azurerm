# `dataAzurermLogicAppStandard` Submodule <a name="`dataAzurermLogicAppStandard` Submodule" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogicAppStandard <a name="DataAzurermLogicAppStandard" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandard(scope Construct, id *string, config DataAzurermLogicAppStandardConfig) DataAzurermLogicAppStandard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig">DataAzurermLogicAppStandardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig">DataAzurermLogicAppStandardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermLogicAppStandardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermLogicAppStandard resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.DataAzurermLogicAppStandard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.DataAzurermLogicAppStandard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.DataAzurermLogicAppStandard_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.DataAzurermLogicAppStandard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermLogicAppStandard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermLogicAppStandard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermLogicAppStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLogicAppStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appServicePlanId">AppServicePlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appSettings">AppSettings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.bundleVersion">BundleVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList">DataAzurermLogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.defaultHostname">DefaultHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.ftpPublishBasicAuthenticationEnabled">FtpPublishBasicAuthenticationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.httpsOnly">HttpsOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList">DataAzurermLogicAppStandardIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.publicNetworkAccess">PublicNetworkAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.scmPublishBasicAuthenticationEnabled">ScmPublishBasicAuthenticationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList">DataAzurermLogicAppStandardSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList">DataAzurermLogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountShareName">StorageAccountShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference">DataAzurermLogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.useExtensionBundle">UseExtensionBundle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appServicePlanId"></a>

```go
func AppServicePlanId() *string
```

- *Type:* *string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appSettings"></a>

```go
func AppSettings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BundleVersion`<sup>Required</sup> <a name="BundleVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.bundleVersion"></a>

```go
func BundleVersion() *string
```

- *Type:* *string

---

##### `ClientAffinityEnabled`<sup>Required</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientAffinityEnabled"></a>

```go
func ClientAffinityEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientCertificateMode"></a>

```go
func ClientCertificateMode() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.connectionString"></a>

```go
func ConnectionString() DataAzurermLogicAppStandardConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList">DataAzurermLogicAppStandardConnectionStringList</a>

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.customDomainVerificationId"></a>

```go
func CustomDomainVerificationId() *string
```

- *Type:* *string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.defaultHostname"></a>

```go
func DefaultHostname() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FtpPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="FtpPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.ftpPublishBasicAuthenticationEnabled"></a>

```go
func FtpPublishBasicAuthenticationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.httpsOnly"></a>

```go
func HttpsOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.identity"></a>

```go
func Identity() DataAzurermLogicAppStandardIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList">DataAzurermLogicAppStandardIdentityList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.outboundIpAddresses"></a>

```go
func OutboundIpAddresses() *string
```

- *Type:* *string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.possibleOutboundIpAddresses"></a>

```go
func PossibleOutboundIpAddresses() *string
```

- *Type:* *string

---

##### `PublicNetworkAccess`<sup>Required</sup> <a name="PublicNetworkAccess" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.publicNetworkAccess"></a>

```go
func PublicNetworkAccess() *string
```

- *Type:* *string

---

##### `ScmPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="ScmPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.scmPublishBasicAuthenticationEnabled"></a>

```go
func ScmPublishBasicAuthenticationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteConfig"></a>

```go
func SiteConfig() DataAzurermLogicAppStandardSiteConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList">DataAzurermLogicAppStandardSiteConfigList</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteCredential"></a>

```go
func SiteCredential() DataAzurermLogicAppStandardSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList">DataAzurermLogicAppStandardSiteCredentialList</a>

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageAccountShareName`<sup>Required</sup> <a name="StorageAccountShareName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountShareName"></a>

```go
func StorageAccountShareName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeouts"></a>

```go
func Timeouts() DataAzurermLogicAppStandardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference">DataAzurermLogicAppStandardTimeoutsOutputReference</a>

---

##### `UseExtensionBundle`<sup>Required</sup> <a name="UseExtensionBundle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.useExtensionBundle"></a>

```go
func UseExtensionBundle() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogicAppStandardConfig <a name="DataAzurermLogicAppStandardConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.timeouts"></a>

```go
Timeouts DataAzurermLogicAppStandardTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#timeouts DataAzurermLogicAppStandard#timeouts}

---

### DataAzurermLogicAppStandardConnectionString <a name="DataAzurermLogicAppStandardConnectionString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardConnectionString {

}
```


### DataAzurermLogicAppStandardIdentity <a name="DataAzurermLogicAppStandardIdentity" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardIdentity {

}
```


### DataAzurermLogicAppStandardSiteConfig <a name="DataAzurermLogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfig {

}
```


### DataAzurermLogicAppStandardSiteConfigCors <a name="DataAzurermLogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfigCors {

}
```


### DataAzurermLogicAppStandardSiteConfigIpRestriction <a name="DataAzurermLogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfigIpRestriction {

}
```


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders {

}
```


### DataAzurermLogicAppStandardSiteConfigScmIpRestriction <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction {

}
```


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders {

}
```


### DataAzurermLogicAppStandardSiteCredential <a name="DataAzurermLogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardSiteCredential {

}
```


### DataAzurermLogicAppStandardTimeouts <a name="DataAzurermLogicAppStandardTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

&dataazurermlogicappstandard.DataAzurermLogicAppStandardTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogicAppStandardConnectionStringList <a name="DataAzurermLogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardConnectionStringOutputReference <a name="DataAzurermLogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString">DataAzurermLogicAppStandardConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString">DataAzurermLogicAppStandardConnectionString</a>

---


### DataAzurermLogicAppStandardIdentityList <a name="DataAzurermLogicAppStandardIdentityList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardIdentityOutputReference <a name="DataAzurermLogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity">DataAzurermLogicAppStandardIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity">DataAzurermLogicAppStandardIdentity</a>

---


### DataAzurermLogicAppStandardSiteConfigCorsList <a name="DataAzurermLogicAppStandardSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigCorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigCorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigCorsOutputReference <a name="DataAzurermLogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors">DataAzurermLogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```go
func SupportCredentials() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors">DataAzurermLogicAppStandardSiteConfigCors</a>

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionList <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction">DataAzurermLogicAppStandardSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfigIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction">DataAzurermLogicAppStandardSiteConfigIpRestriction</a>

---


### DataAzurermLogicAppStandardSiteConfigList <a name="DataAzurermLogicAppStandardSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigOutputReference <a name="DataAzurermLogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList">DataAzurermLogicAppStandardSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList">DataAzurermLogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">ScmMinTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig">DataAzurermLogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```go
func AlwaysOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```go
func AppScaleLimit() *f64
```

- *Type:* *f64

---

##### `AutoSwapSlotName`<sup>Required</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName"></a>

```go
func AutoSwapSlotName() *string
```

- *Type:* *string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.cors"></a>

```go
func Cors() DataAzurermLogicAppStandardSiteConfigCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList">DataAzurermLogicAppStandardSiteConfigCorsList</a>

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```go
func DotnetFrameworkVersion() *string
```

- *Type:* *string

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```go
func ElasticInstanceMinimum() *f64
```

- *Type:* *f64

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```go
func FtpsState() *string
```

- *Type:* *string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```go
func IpRestriction() DataAzurermLogicAppStandardSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList">DataAzurermLogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```go
func LinuxFxVersion() *string
```

- *Type:* *string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```go
func MinTlsVersion() *string
```

- *Type:* *string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```go
func PreWarmedInstanceCount() *f64
```

- *Type:* *f64

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```go
func RuntimeScaleMonitoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```go
func ScmIpRestriction() DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `ScmMinTlsVersion`<sup>Required</sup> <a name="ScmMinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```go
func ScmMinTlsVersion() *string
```

- *Type:* *string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```go
func ScmUseMainIpRestriction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```go
func Use32BitWorkerProcess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```go
func VnetRouteAllEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```go
func WebsocketsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig">DataAzurermLogicAppStandardSiteConfig</a>

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigScmIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction">DataAzurermLogicAppStandardSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteConfigScmIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction">DataAzurermLogicAppStandardSiteConfigScmIpRestriction</a>

---


### DataAzurermLogicAppStandardSiteCredentialList <a name="DataAzurermLogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermLogicAppStandardSiteCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get"></a>

```go
func Get(index *f64) DataAzurermLogicAppStandardSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermLogicAppStandardSiteCredentialOutputReference <a name="DataAzurermLogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardSiteCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermLogicAppStandardSiteCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential">DataAzurermLogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermLogicAppStandardSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential">DataAzurermLogicAppStandardSiteCredential</a>

---


### DataAzurermLogicAppStandardTimeoutsOutputReference <a name="DataAzurermLogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermlogicappstandard"

dataazurermlogicappstandard.NewDataAzurermLogicAppStandardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermLogicAppStandardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



