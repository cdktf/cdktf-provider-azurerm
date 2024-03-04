# `arcMachineExtension` Submodule <a name="`arcMachineExtension` Submodule" id="@cdktf/provider-azurerm.arcMachineExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcMachineExtension <a name="ArcMachineExtension" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension azurerm_arc_machine_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.NewArcMachineExtension(scope Construct, id *string, config ArcMachineExtensionConfig) ArcMachineExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig">ArcMachineExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig">ArcMachineExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetAutomaticUpgradeEnabled">ResetAutomaticUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetForceUpdateTag">ResetForceUpdateTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTypeHandlerVersion">ResetTypeHandlerVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.putTimeouts"></a>

```go
func PutTimeouts(value ArcMachineExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts">ArcMachineExtensionTimeouts</a>

---

##### `ResetAutomaticUpgradeEnabled` <a name="ResetAutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetAutomaticUpgradeEnabled"></a>

```go
func ResetAutomaticUpgradeEnabled()
```

##### `ResetForceUpdateTag` <a name="ResetForceUpdateTag" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetForceUpdateTag"></a>

```go
func ResetForceUpdateTag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetProtectedSettings"></a>

```go
func ResetProtectedSettings()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTypeHandlerVersion` <a name="ResetTypeHandlerVersion" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.resetTypeHandlerVersion"></a>

```go
func ResetTypeHandlerVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcMachineExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.ArcMachineExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.ArcMachineExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.ArcMachineExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.ArcMachineExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ArcMachineExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArcMachineExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArcMachineExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ArcMachineExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference">ArcMachineExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.arcMachineIdInput">ArcMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.automaticUpgradeEnabledInput">AutomaticUpgradeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forceUpdateTagInput">ForceUpdateTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.publisherInput">PublisherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeHandlerVersionInput">TypeHandlerVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.arcMachineId">ArcMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.timeouts"></a>

```go
func Timeouts() ArcMachineExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference">ArcMachineExtensionTimeoutsOutputReference</a>

---

##### `ArcMachineIdInput`<sup>Optional</sup> <a name="ArcMachineIdInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.arcMachineIdInput"></a>

```go
func ArcMachineIdInput() *string
```

- *Type:* *string

---

##### `AutomaticUpgradeEnabledInput`<sup>Optional</sup> <a name="AutomaticUpgradeEnabledInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.automaticUpgradeEnabledInput"></a>

```go
func AutomaticUpgradeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTagInput`<sup>Optional</sup> <a name="ForceUpdateTagInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forceUpdateTagInput"></a>

```go
func ForceUpdateTagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.protectedSettingsInput"></a>

```go
func ProtectedSettingsInput() *string
```

- *Type:* *string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.publisherInput"></a>

```go
func PublisherInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeHandlerVersionInput`<sup>Optional</sup> <a name="TypeHandlerVersionInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeHandlerVersionInput"></a>

```go
func TypeHandlerVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.arcMachineId"></a>

```go
func ArcMachineId() *string
```

- *Type:* *string

---

##### `AutomaticUpgradeEnabled`<sup>Required</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.automaticUpgradeEnabled"></a>

```go
func AutomaticUpgradeEnabled() interface{}
```

- *Type:* interface{}

---

##### `ForceUpdateTag`<sup>Required</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.forceUpdateTag"></a>

```go
func ForceUpdateTag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.protectedSettings"></a>

```go
func ProtectedSettings() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeHandlerVersion`<sup>Required</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.typeHandlerVersion"></a>

```go
func TypeHandlerVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcMachineExtensionConfig <a name="ArcMachineExtensionConfig" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

&arcmachineextension.ArcMachineExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArcMachineId: *string,
	Location: *string,
	Name: *string,
	Publisher: *string,
	Type: *string,
	AutomaticUpgradeEnabled: interface{},
	ForceUpdateTag: *string,
	Id: *string,
	ProtectedSettings: *string,
	Settings: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.arcMachineExtension.ArcMachineExtensionTimeouts,
	TypeHandlerVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.arcMachineId">ArcMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#arc_machine_id ArcMachineExtension#arc_machine_id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#location ArcMachineExtension#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#name ArcMachineExtension#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.publisher">Publisher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#publisher ArcMachineExtension#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#type ArcMachineExtension#type}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.automaticUpgradeEnabled">AutomaticUpgradeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#automatic_upgrade_enabled ArcMachineExtension#automatic_upgrade_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.forceUpdateTag">ForceUpdateTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#force_update_tag ArcMachineExtension#force_update_tag}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#id ArcMachineExtension#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.protectedSettings">ProtectedSettings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#protected_settings ArcMachineExtension#protected_settings}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.settings">Settings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#settings ArcMachineExtension#settings}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#tags ArcMachineExtension#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts">ArcMachineExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.typeHandlerVersion">TypeHandlerVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#type_handler_version ArcMachineExtension#type_handler_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArcMachineId`<sup>Required</sup> <a name="ArcMachineId" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.arcMachineId"></a>

```go
ArcMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#arc_machine_id ArcMachineExtension#arc_machine_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#location ArcMachineExtension#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#name ArcMachineExtension#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.publisher"></a>

```go
Publisher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#publisher ArcMachineExtension#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#type ArcMachineExtension#type}.

---

##### `AutomaticUpgradeEnabled`<sup>Optional</sup> <a name="AutomaticUpgradeEnabled" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.automaticUpgradeEnabled"></a>

```go
AutomaticUpgradeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#automatic_upgrade_enabled ArcMachineExtension#automatic_upgrade_enabled}.

---

##### `ForceUpdateTag`<sup>Optional</sup> <a name="ForceUpdateTag" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.forceUpdateTag"></a>

```go
ForceUpdateTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#force_update_tag ArcMachineExtension#force_update_tag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#id ArcMachineExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.protectedSettings"></a>

```go
ProtectedSettings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#protected_settings ArcMachineExtension#protected_settings}.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#settings ArcMachineExtension#settings}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#tags ArcMachineExtension#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.timeouts"></a>

```go
Timeouts ArcMachineExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts">ArcMachineExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#timeouts ArcMachineExtension#timeouts}

---

##### `TypeHandlerVersion`<sup>Optional</sup> <a name="TypeHandlerVersion" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionConfig.property.typeHandlerVersion"></a>

```go
TypeHandlerVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#type_handler_version ArcMachineExtension#type_handler_version}.

---

### ArcMachineExtensionTimeouts <a name="ArcMachineExtensionTimeouts" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

&arcmachineextension.ArcMachineExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#create ArcMachineExtension#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#delete ArcMachineExtension#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#read ArcMachineExtension#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#update ArcMachineExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#create ArcMachineExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#delete ArcMachineExtension#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#read ArcMachineExtension#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/arc_machine_extension#update ArcMachineExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcMachineExtensionTimeoutsOutputReference <a name="ArcMachineExtensionTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcmachineextension"

arcmachineextension.NewArcMachineExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcMachineExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcMachineExtension.ArcMachineExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



