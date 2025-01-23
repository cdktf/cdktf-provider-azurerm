# `virtualDesktopApplicationGroup` Submodule <a name="`virtualDesktopApplicationGroup` Submodule" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopApplicationGroup <a name="VirtualDesktopApplicationGroup" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group azurerm_virtual_desktop_application_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.NewVirtualDesktopApplicationGroup(scope Construct, id *string, config VirtualDesktopApplicationGroupConfig) VirtualDesktopApplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig">VirtualDesktopApplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig">VirtualDesktopApplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName">ResetDefaultDesktopDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts"></a>

```go
func PutTimeouts(value VirtualDesktopApplicationGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

---

##### `ResetDefaultDesktopDisplayName` <a name="ResetDefaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDefaultDesktopDisplayName"></a>

```go
func ResetDefaultDesktopDisplayName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.VirtualDesktopApplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.VirtualDesktopApplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.VirtualDesktopApplicationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.VirtualDesktopApplicationGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualDesktopApplicationGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualDesktopApplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualDesktopApplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualDesktopApplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput">DefaultDesktopDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput">HostPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName">DefaultDesktopDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId">HostPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeouts"></a>

```go
func Timeouts() VirtualDesktopApplicationGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference">VirtualDesktopApplicationGroupTimeoutsOutputReference</a>

---

##### `DefaultDesktopDisplayNameInput`<sup>Optional</sup> <a name="DefaultDesktopDisplayNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayNameInput"></a>

```go
func DefaultDesktopDisplayNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `HostPoolIdInput`<sup>Optional</sup> <a name="HostPoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolIdInput"></a>

```go
func HostPoolIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DefaultDesktopDisplayName`<sup>Required</sup> <a name="DefaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.defaultDesktopDisplayName"></a>

```go
func DefaultDesktopDisplayName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `HostPoolId`<sup>Required</sup> <a name="HostPoolId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.hostPoolId"></a>

```go
func HostPoolId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopApplicationGroupConfig <a name="VirtualDesktopApplicationGroupConfig" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

&virtualdesktopapplicationgroup.VirtualDesktopApplicationGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HostPoolId: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Type: *string,
	DefaultDesktopDisplayName: *string,
	Description: *string,
	FriendlyName: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId">HostPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName">DefaultDesktopDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostPoolId`<sup>Required</sup> <a name="HostPoolId" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.hostPoolId"></a>

```go
HostPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#host_pool_id VirtualDesktopApplicationGroup#host_pool_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#location VirtualDesktopApplicationGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#name VirtualDesktopApplicationGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#resource_group_name VirtualDesktopApplicationGroup#resource_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#type VirtualDesktopApplicationGroup#type}.

---

##### `DefaultDesktopDisplayName`<sup>Optional</sup> <a name="DefaultDesktopDisplayName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.defaultDesktopDisplayName"></a>

```go
DefaultDesktopDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#default_desktop_display_name VirtualDesktopApplicationGroup#default_desktop_display_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#description VirtualDesktopApplicationGroup#description}.

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#friendly_name VirtualDesktopApplicationGroup#friendly_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#id VirtualDesktopApplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#tags VirtualDesktopApplicationGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupConfig.property.timeouts"></a>

```go
Timeouts VirtualDesktopApplicationGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts">VirtualDesktopApplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#timeouts VirtualDesktopApplicationGroup#timeouts}

---

### VirtualDesktopApplicationGroupTimeouts <a name="VirtualDesktopApplicationGroupTimeouts" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

&virtualdesktopapplicationgroup.VirtualDesktopApplicationGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#create VirtualDesktopApplicationGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#delete VirtualDesktopApplicationGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#read VirtualDesktopApplicationGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/virtual_desktop_application_group#update VirtualDesktopApplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopApplicationGroupTimeoutsOutputReference <a name="VirtualDesktopApplicationGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/virtualdesktopapplicationgroup"

virtualdesktopapplicationgroup.NewVirtualDesktopApplicationGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualDesktopApplicationGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopApplicationGroup.VirtualDesktopApplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



