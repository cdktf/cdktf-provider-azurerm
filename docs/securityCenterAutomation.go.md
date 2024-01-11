# `securityCenterAutomation` Submodule <a name="`securityCenterAutomation` Submodule" id="@cdktf/provider-azurerm.securityCenterAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAutomation <a name="SecurityCenterAutomation" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation azurerm_security_center_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomation(scope Construct, id *string, config SecurityCenterAutomationConfig) SecurityCenterAutomation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig">SecurityCenterAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig">SecurityCenterAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts"></a>

```go
func PutTimeouts(value SecurityCenterAutomationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.SecurityCenterAutomation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.SecurityCenterAutomation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.SecurityCenterAutomation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.SecurityCenterAutomation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecurityCenterAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityCenterAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityCenterAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.action"></a>

```go
func Action() SecurityCenterAutomationActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList">SecurityCenterAutomationActionList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.source"></a>

```go
func Source() SecurityCenterAutomationSourceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList">SecurityCenterAutomationSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeouts"></a>

```go
func Timeouts() SecurityCenterAutomationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference">SecurityCenterAutomationTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAutomationAction <a name="SecurityCenterAutomationAction" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationAction {
	ResourceId: *string,
	Type: *string,
	ConnectionString: *string,
	TriggerUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl">TriggerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#resource_id SecurityCenterAutomation#resource_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#type SecurityCenterAutomation#type}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#connection_string SecurityCenterAutomation#connection_string}.

---

##### `TriggerUrl`<sup>Optional</sup> <a name="TriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationAction.property.triggerUrl"></a>

```go
TriggerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#trigger_url SecurityCenterAutomation#trigger_url}.

---

### SecurityCenterAutomationConfig <a name="SecurityCenterAutomationConfig" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Scopes: *[]*string,
	Source: interface{},
	Description: *string,
	Enabled: interface{},
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#action SecurityCenterAutomation#action}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#location SecurityCenterAutomation#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#name SecurityCenterAutomation#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#resource_group_name SecurityCenterAutomation#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#scopes SecurityCenterAutomation#scopes}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#source SecurityCenterAutomation#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#description SecurityCenterAutomation#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#enabled SecurityCenterAutomation#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#id SecurityCenterAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#tags SecurityCenterAutomation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationConfig.property.timeouts"></a>

```go
Timeouts SecurityCenterAutomationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts">SecurityCenterAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#timeouts SecurityCenterAutomation#timeouts}

---

### SecurityCenterAutomationSource <a name="SecurityCenterAutomationSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationSource {
	EventSource: *string,
	RuleSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource">EventSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet">RuleSet</a></code> | <code>interface{}</code> | rule_set block. |

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.eventSource"></a>

```go
EventSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#event_source SecurityCenterAutomation#event_source}.

---

##### `RuleSet`<sup>Optional</sup> <a name="RuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSource.property.ruleSet"></a>

```go
RuleSet interface{}
```

- *Type:* interface{}

rule_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#rule_set SecurityCenterAutomation#rule_set}

---

### SecurityCenterAutomationSourceRuleSet <a name="SecurityCenterAutomationSourceRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationSourceRuleSet {
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSet.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#rule SecurityCenterAutomation#rule}

---

### SecurityCenterAutomationSourceRuleSetRule <a name="SecurityCenterAutomationSourceRuleSetRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationSourceRuleSetRule {
	ExpectedValue: *string,
	Operator: *string,
	PropertyPath: *string,
	PropertyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue">ExpectedValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath">PropertyPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType">PropertyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}. |

---

##### `ExpectedValue`<sup>Required</sup> <a name="ExpectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.expectedValue"></a>

```go
ExpectedValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#expected_value SecurityCenterAutomation#expected_value}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#operator SecurityCenterAutomation#operator}.

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyPath"></a>

```go
PropertyPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#property_path SecurityCenterAutomation#property_path}.

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRule.property.propertyType"></a>

```go
PropertyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#property_type SecurityCenterAutomation#property_type}.

---

### SecurityCenterAutomationTimeouts <a name="SecurityCenterAutomationTimeouts" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

&securitycenterautomation.SecurityCenterAutomationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#create SecurityCenterAutomation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#delete SecurityCenterAutomation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#read SecurityCenterAutomation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/resources/security_center_automation#update SecurityCenterAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAutomationActionList <a name="SecurityCenterAutomationActionList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityCenterAutomationActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get"></a>

```go
func Get(index *f64) SecurityCenterAutomationActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationActionOutputReference <a name="SecurityCenterAutomationActionOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityCenterAutomationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl">ResetTriggerUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetTriggerUrl` <a name="ResetTriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.resetTriggerUrl"></a>

```go
func ResetTriggerUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput">TriggerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl">TriggerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `TriggerUrlInput`<sup>Optional</sup> <a name="TriggerUrlInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrlInput"></a>

```go
func TriggerUrlInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `TriggerUrl`<sup>Required</sup> <a name="TriggerUrl" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.triggerUrl"></a>

```go
func TriggerUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceList <a name="SecurityCenterAutomationSourceList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityCenterAutomationSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get"></a>

```go
func Get(index *f64) SecurityCenterAutomationSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceOutputReference <a name="SecurityCenterAutomationSourceOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityCenterAutomationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet">PutRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet">ResetRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleSet` <a name="PutRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet"></a>

```go
func PutRuleSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.putRuleSet.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRuleSet` <a name="ResetRuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.resetRuleSet"></a>

```go
func ResetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet">RuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput">RuleSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource">EventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleSet`<sup>Required</sup> <a name="RuleSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSet"></a>

```go
func RuleSet() SecurityCenterAutomationSourceRuleSetList
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList">SecurityCenterAutomationSourceRuleSetList</a>

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSourceInput"></a>

```go
func EventSourceInput() *string
```

- *Type:* *string

---

##### `RuleSetInput`<sup>Optional</sup> <a name="RuleSetInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.ruleSetInput"></a>

```go
func RuleSetInput() interface{}
```

- *Type:* interface{}

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.eventSource"></a>

```go
func EventSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceRuleSetList <a name="SecurityCenterAutomationSourceRuleSetList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceRuleSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityCenterAutomationSourceRuleSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get"></a>

```go
func Get(index *f64) SecurityCenterAutomationSourceRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceRuleSetOutputReference <a name="SecurityCenterAutomationSourceRuleSetOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityCenterAutomationSourceRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule">PutRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.rule"></a>

```go
func Rule() SecurityCenterAutomationSourceRuleSetRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList">SecurityCenterAutomationSourceRuleSetRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceRuleSetRuleList <a name="SecurityCenterAutomationSourceRuleSetRuleList" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceRuleSetRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityCenterAutomationSourceRuleSetRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get"></a>

```go
func Get(index *f64) SecurityCenterAutomationSourceRuleSetRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationSourceRuleSetRuleOutputReference <a name="SecurityCenterAutomationSourceRuleSetRuleOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationSourceRuleSetRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityCenterAutomationSourceRuleSetRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput">ExpectedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput">PropertyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput">PropertyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue">ExpectedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath">PropertyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType">PropertyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpectedValueInput`<sup>Optional</sup> <a name="ExpectedValueInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValueInput"></a>

```go
func ExpectedValueInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `PropertyPathInput`<sup>Optional</sup> <a name="PropertyPathInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPathInput"></a>

```go
func PropertyPathInput() *string
```

- *Type:* *string

---

##### `PropertyTypeInput`<sup>Optional</sup> <a name="PropertyTypeInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyTypeInput"></a>

```go
func PropertyTypeInput() *string
```

- *Type:* *string

---

##### `ExpectedValue`<sup>Required</sup> <a name="ExpectedValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.expectedValue"></a>

```go
func ExpectedValue() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyPath"></a>

```go
func PropertyPath() *string
```

- *Type:* *string

---

##### `PropertyType`<sup>Required</sup> <a name="PropertyType" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.propertyType"></a>

```go
func PropertyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationSourceRuleSetRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityCenterAutomationTimeoutsOutputReference <a name="SecurityCenterAutomationTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/securitycenterautomation"

securitycenterautomation.NewSecurityCenterAutomationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityCenterAutomationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterAutomation.SecurityCenterAutomationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



