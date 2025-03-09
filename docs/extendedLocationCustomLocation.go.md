# `extendedLocationCustomLocation` Submodule <a name="`extendedLocationCustomLocation` Submodule" id="@cdktf/provider-azurerm.extendedLocationCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtendedLocationCustomLocation <a name="ExtendedLocationCustomLocation" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location azurerm_extended_location_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.NewExtendedLocationCustomLocation(scope Construct, id *string, config ExtendedLocationCustomLocationConfig) ExtendedLocationCustomLocation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig">ExtendedLocationCustomLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType">ResetHostType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication"></a>

```go
func PutAuthentication(value ExtendedLocationCustomLocationAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts"></a>

```go
func PutTimeouts(value ExtendedLocationCustomLocationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetAuthentication"></a>

```go
func ResetAuthentication()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetHostType` <a name="ResetHostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetHostType"></a>

```go
func ResetHostType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.ExtendedLocationCustomLocation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.ExtendedLocationCustomLocation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.ExtendedLocationCustomLocation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.ExtendedLocationCustomLocation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExtendedLocationCustomLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExtendedLocationCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExtendedLocationCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput">ClusterExtensionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput">HostResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput">HostTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds">ClusterExtensionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId">HostResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType">HostType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authentication"></a>

```go
func Authentication() ExtendedLocationCustomLocationAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference">ExtendedLocationCustomLocationAuthenticationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeouts"></a>

```go
func Timeouts() ExtendedLocationCustomLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference">ExtendedLocationCustomLocationTimeoutsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.authenticationInput"></a>

```go
func AuthenticationInput() ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---

##### `ClusterExtensionIdsInput`<sup>Optional</sup> <a name="ClusterExtensionIdsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIdsInput"></a>

```go
func ClusterExtensionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `HostResourceIdInput`<sup>Optional</sup> <a name="HostResourceIdInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceIdInput"></a>

```go
func HostResourceIdInput() *string
```

- *Type:* *string

---

##### `HostTypeInput`<sup>Optional</sup> <a name="HostTypeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostTypeInput"></a>

```go
func HostTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterExtensionIds`<sup>Required</sup> <a name="ClusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.clusterExtensionIds"></a>

```go
func ClusterExtensionIds() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HostResourceId`<sup>Required</sup> <a name="HostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostResourceId"></a>

```go
func HostResourceId() *string
```

- *Type:* *string

---

##### `HostType`<sup>Required</sup> <a name="HostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.hostType"></a>

```go
func HostType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtendedLocationCustomLocationAuthentication <a name="ExtendedLocationCustomLocationAuthentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

&extendedlocationcustomlocation.ExtendedLocationCustomLocationAuthentication {
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#value ExtendedLocationCustomLocation#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#type ExtendedLocationCustomLocation#type}.

---

### ExtendedLocationCustomLocationConfig <a name="ExtendedLocationCustomLocationConfig" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

&extendedlocationcustomlocation.ExtendedLocationCustomLocationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterExtensionIds: *[]*string,
	HostResourceId: *string,
	Location: *string,
	Name: *string,
	Namespace: *string,
	ResourceGroupName: *string,
	Authentication: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication,
	DisplayName: *string,
	HostType: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds">ClusterExtensionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId">HostResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType">HostType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterExtensionIds`<sup>Required</sup> <a name="ClusterExtensionIds" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.clusterExtensionIds"></a>

```go
ClusterExtensionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#cluster_extension_ids ExtendedLocationCustomLocation#cluster_extension_ids}.

---

##### `HostResourceId`<sup>Required</sup> <a name="HostResourceId" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostResourceId"></a>

```go
HostResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#host_resource_id ExtendedLocationCustomLocation#host_resource_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#location ExtendedLocationCustomLocation#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#name ExtendedLocationCustomLocation#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#namespace ExtendedLocationCustomLocation#namespace}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#resource_group_name ExtendedLocationCustomLocation#resource_group_name}.

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.authentication"></a>

```go
Authentication ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#authentication ExtendedLocationCustomLocation#authentication}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#display_name ExtendedLocationCustomLocation#display_name}.

---

##### `HostType`<sup>Optional</sup> <a name="HostType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.hostType"></a>

```go
HostType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#host_type ExtendedLocationCustomLocation#host_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#id ExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationConfig.property.timeouts"></a>

```go
Timeouts ExtendedLocationCustomLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts">ExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#timeouts ExtendedLocationCustomLocation#timeouts}

---

### ExtendedLocationCustomLocationTimeouts <a name="ExtendedLocationCustomLocationTimeouts" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

&extendedlocationcustomlocation.ExtendedLocationCustomLocationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#create ExtendedLocationCustomLocation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#delete ExtendedLocationCustomLocation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#read ExtendedLocationCustomLocation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/extended_location_custom_location#update ExtendedLocationCustomLocation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExtendedLocationCustomLocationAuthenticationOutputReference <a name="ExtendedLocationCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.NewExtendedLocationCustomLocationAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExtendedLocationCustomLocationAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() ExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationAuthentication">ExtendedLocationCustomLocationAuthentication</a>

---


### ExtendedLocationCustomLocationTimeoutsOutputReference <a name="ExtendedLocationCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/extendedlocationcustomlocation"

extendedlocationcustomlocation.NewExtendedLocationCustomLocationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExtendedLocationCustomLocationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.extendedLocationCustomLocation.ExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



