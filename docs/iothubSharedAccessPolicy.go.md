# `iothubSharedAccessPolicy` Submodule <a name="`iothubSharedAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubSharedAccessPolicyA <a name="IothubSharedAccessPolicyA" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy azurerm_iothub_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.NewIothubSharedAccessPolicyA(scope Construct, id *string, config IothubSharedAccessPolicyAConfig) IothubSharedAccessPolicyA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig">IothubSharedAccessPolicyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig">IothubSharedAccessPolicyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect">ResetDeviceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead">ResetRegistryRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite">ResetRegistryWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect">ResetServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts"></a>

```go
func PutTimeouts(value IothubSharedAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---

##### `ResetDeviceConnect` <a name="ResetDeviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect"></a>

```go
func ResetDeviceConnect()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId"></a>

```go
func ResetId()
```

##### `ResetRegistryRead` <a name="ResetRegistryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead"></a>

```go
func ResetRegistryRead()
```

##### `ResetRegistryWrite` <a name="ResetRegistryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite"></a>

```go
func ResetRegistryWrite()
```

##### `ResetServiceConnect` <a name="ResetServiceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect"></a>

```go
func ResetServiceConnect()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IothubSharedAccessPolicyA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.IothubSharedAccessPolicyA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.IothubSharedAccessPolicyA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.IothubSharedAccessPolicyA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.IothubSharedAccessPolicyA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IothubSharedAccessPolicyA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IothubSharedAccessPolicyA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IothubSharedAccessPolicyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IothubSharedAccessPolicyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput">DeviceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput">IothubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput">RegistryReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput">RegistryWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput">ServiceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect">DeviceConnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName">IothubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead">RegistryRead</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite">RegistryWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect">ServiceConnect</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts"></a>

```go
func Timeouts() IothubSharedAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `DeviceConnectInput`<sup>Optional</sup> <a name="DeviceConnectInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput"></a>

```go
func DeviceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubNameInput`<sup>Optional</sup> <a name="IothubNameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput"></a>

```go
func IothubNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegistryReadInput`<sup>Optional</sup> <a name="RegistryReadInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput"></a>

```go
func RegistryReadInput() interface{}
```

- *Type:* interface{}

---

##### `RegistryWriteInput`<sup>Optional</sup> <a name="RegistryWriteInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput"></a>

```go
func RegistryWriteInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceConnectInput`<sup>Optional</sup> <a name="ServiceConnectInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput"></a>

```go
func ServiceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceConnect`<sup>Required</sup> <a name="DeviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect"></a>

```go
func DeviceConnect() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName"></a>

```go
func IothubName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegistryRead`<sup>Required</sup> <a name="RegistryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead"></a>

```go
func RegistryRead() interface{}
```

- *Type:* interface{}

---

##### `RegistryWrite`<sup>Required</sup> <a name="RegistryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite"></a>

```go
func RegistryWrite() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceConnect`<sup>Required</sup> <a name="ServiceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect"></a>

```go
func ServiceConnect() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubSharedAccessPolicyAConfig <a name="IothubSharedAccessPolicyAConfig" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

&iothubsharedaccesspolicy.IothubSharedAccessPolicyAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IothubName: *string,
	Name: *string,
	ResourceGroupName: *string,
	DeviceConnect: interface{},
	Id: *string,
	RegistryRead: interface{},
	RegistryWrite: interface{},
	ServiceConnect: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName">IothubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect">DeviceConnect</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead">RegistryRead</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite">RegistryWrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect">ServiceConnect</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IothubName`<sup>Required</sup> <a name="IothubName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName"></a>

```go
IothubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}.

---

##### `DeviceConnect`<sup>Optional</sup> <a name="DeviceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect"></a>

```go
DeviceConnect interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RegistryRead`<sup>Optional</sup> <a name="RegistryRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead"></a>

```go
RegistryRead interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}.

---

##### `RegistryWrite`<sup>Optional</sup> <a name="RegistryWrite" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite"></a>

```go
RegistryWrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}.

---

##### `ServiceConnect`<sup>Optional</sup> <a name="ServiceConnect" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect"></a>

```go
ServiceConnect interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts"></a>

```go
Timeouts IothubSharedAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#timeouts IothubSharedAccessPolicyA#timeouts}

---

### IothubSharedAccessPolicyTimeouts <a name="IothubSharedAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

&iothubsharedaccesspolicy.IothubSharedAccessPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubSharedAccessPolicyTimeoutsOutputReference <a name="IothubSharedAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/iothubsharedaccesspolicy"

iothubsharedaccesspolicy.NewIothubSharedAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IothubSharedAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



