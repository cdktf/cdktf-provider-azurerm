# `arcResourceBridgeAppliance` Submodule <a name="`arcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcResourceBridgeAppliance <a name="ArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.NewArcResourceBridgeAppliance(scope Construct, id *string, config ArcResourceBridgeApplianceConfig) ArcResourceBridgeAppliance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64">ResetPublicKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity"></a>

```go
func PutIdentity(value ArcResourceBridgeApplianceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts"></a>

```go
func PutTimeouts(value ArcResourceBridgeApplianceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId"></a>

```go
func ResetId()
```

##### `ResetPublicKeyBase64` <a name="ResetPublicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64"></a>

```go
func ResetPublicKeyBase64()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.ArcResourceBridgeAppliance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.ArcResourceBridgeAppliance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.ArcResourceBridgeAppliance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.ArcResourceBridgeAppliance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ArcResourceBridgeAppliance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput">DistroInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput">InfrastructureProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input">PublicKeyBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro">Distro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider">InfrastructureProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64">PublicKeyBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity"></a>

```go
func Identity() ArcResourceBridgeApplianceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts"></a>

```go
func Timeouts() ArcResourceBridgeApplianceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `DistroInput`<sup>Optional</sup> <a name="DistroInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput"></a>

```go
func DistroInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput"></a>

```go
func IdentityInput() ArcResourceBridgeApplianceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InfrastructureProviderInput`<sup>Optional</sup> <a name="InfrastructureProviderInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput"></a>

```go
func InfrastructureProviderInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicKeyBase64Input`<sup>Optional</sup> <a name="PublicKeyBase64Input" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input"></a>

```go
func PublicKeyBase64Input() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Distro`<sup>Required</sup> <a name="Distro" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro"></a>

```go
func Distro() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureProvider`<sup>Required</sup> <a name="InfrastructureProvider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```go
func InfrastructureProvider() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicKeyBase64`<sup>Required</sup> <a name="PublicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```go
func PublicKeyBase64() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcResourceBridgeApplianceConfig <a name="ArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

&arcresourcebridgeappliance.ArcResourceBridgeApplianceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Distro: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity,
	InfrastructureProvider: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	PublicKeyBase64: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro">Distro</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider">InfrastructureProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64">PublicKeyBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Distro`<sup>Required</sup> <a name="Distro" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro"></a>

```go
Distro *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity"></a>

```go
Identity ArcResourceBridgeApplianceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#identity ArcResourceBridgeAppliance#identity}

---

##### `InfrastructureProvider`<sup>Required</sup> <a name="InfrastructureProvider" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider"></a>

```go
InfrastructureProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicKeyBase64`<sup>Optional</sup> <a name="PublicKeyBase64" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64"></a>

```go
PublicKeyBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts"></a>

```go
Timeouts ArcResourceBridgeApplianceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#timeouts ArcResourceBridgeAppliance#timeouts}

---

### ArcResourceBridgeApplianceIdentity <a name="ArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

&arcresourcebridgeappliance.ArcResourceBridgeApplianceIdentity {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}.

---

### ArcResourceBridgeApplianceTimeouts <a name="ArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

&arcresourcebridgeappliance.ArcResourceBridgeApplianceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcResourceBridgeApplianceIdentityOutputReference <a name="ArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.NewArcResourceBridgeApplianceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcResourceBridgeApplianceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ArcResourceBridgeApplianceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---


### ArcResourceBridgeApplianceTimeoutsOutputReference <a name="ArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/arcresourcebridgeappliance"

arcresourcebridgeappliance.NewArcResourceBridgeApplianceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ArcResourceBridgeApplianceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



