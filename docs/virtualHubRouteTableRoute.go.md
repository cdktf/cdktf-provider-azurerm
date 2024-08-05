# `virtualHubRouteTableRoute` Submodule <a name="`virtualHubRouteTableRoute` Submodule" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubRouteTableRouteA <a name="VirtualHubRouteTableRouteA" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route azurerm_virtual_hub_route_table_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.NewVirtualHubRouteTableRouteA(scope Construct, id *string, config VirtualHubRouteTableRouteAConfig) VirtualHubRouteTableRouteA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig">VirtualHubRouteTableRouteAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig">VirtualHubRouteTableRouteAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType">ResetNextHopType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts"></a>

```go
func PutTimeouts(value VirtualHubRouteTableRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetId"></a>

```go
func ResetId()
```

##### `ResetNextHopType` <a name="ResetNextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetNextHopType"></a>

```go
func ResetNextHopType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubRouteTableRouteA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.VirtualHubRouteTableRouteA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.VirtualHubRouteTableRouteA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.VirtualHubRouteTableRouteA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.VirtualHubRouteTableRouteA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VirtualHubRouteTableRouteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VirtualHubRouteTableRouteA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VirtualHubRouteTableRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubRouteTableRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput">DestinationsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput">NextHopInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput">NextHopTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType">DestinationsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop">NextHop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType">NextHopType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeouts"></a>

```go
func Timeouts() VirtualHubRouteTableRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference">VirtualHubRouteTableRouteTimeoutsOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationsTypeInput`<sup>Optional</sup> <a name="DestinationsTypeInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsTypeInput"></a>

```go
func DestinationsTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NextHopInput`<sup>Optional</sup> <a name="NextHopInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopInput"></a>

```go
func NextHopInput() *string
```

- *Type:* *string

---

##### `NextHopTypeInput`<sup>Optional</sup> <a name="NextHopTypeInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopTypeInput"></a>

```go
func NextHopTypeInput() *string
```

- *Type:* *string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationsType`<sup>Required</sup> <a name="DestinationsType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.destinationsType"></a>

```go
func DestinationsType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHop"></a>

```go
func NextHop() *string
```

- *Type:* *string

---

##### `NextHopType`<sup>Required</sup> <a name="NextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.nextHopType"></a>

```go
func NextHopType() *string
```

- *Type:* *string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubRouteTableRouteAConfig <a name="VirtualHubRouteTableRouteAConfig" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

&virtualhubroutetableroute.VirtualHubRouteTableRouteAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Destinations: *[]*string,
	DestinationsType: *string,
	Name: *string,
	NextHop: *string,
	RouteTableId: *string,
	Id: *string,
	NextHopType: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations">Destinations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType">DestinationsType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop">NextHop</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType">NextHopType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#destinations VirtualHubRouteTableRouteA#destinations}.

---

##### `DestinationsType`<sup>Required</sup> <a name="DestinationsType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.destinationsType"></a>

```go
DestinationsType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#destinations_type VirtualHubRouteTableRouteA#destinations_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#name VirtualHubRouteTableRouteA#name}.

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHop"></a>

```go
NextHop *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#next_hop VirtualHubRouteTableRouteA#next_hop}.

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#route_table_id VirtualHubRouteTableRouteA#route_table_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#id VirtualHubRouteTableRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NextHopType`<sup>Optional</sup> <a name="NextHopType" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.nextHopType"></a>

```go
NextHopType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#next_hop_type VirtualHubRouteTableRouteA#next_hop_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteAConfig.property.timeouts"></a>

```go
Timeouts VirtualHubRouteTableRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts">VirtualHubRouteTableRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#timeouts VirtualHubRouteTableRouteA#timeouts}

---

### VirtualHubRouteTableRouteTimeouts <a name="VirtualHubRouteTableRouteTimeouts" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

&virtualhubroutetableroute.VirtualHubRouteTableRouteTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#create VirtualHubRouteTableRouteA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#delete VirtualHubRouteTableRouteA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#read VirtualHubRouteTableRouteA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/virtual_hub_route_table_route#update VirtualHubRouteTableRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubRouteTableRouteTimeoutsOutputReference <a name="VirtualHubRouteTableRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/virtualhubroutetableroute"

virtualhubroutetableroute.NewVirtualHubRouteTableRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualHubRouteTableRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubRouteTableRoute.VirtualHubRouteTableRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



