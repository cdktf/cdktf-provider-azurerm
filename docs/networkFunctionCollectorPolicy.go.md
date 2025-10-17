# `networkFunctionCollectorPolicy` Submodule <a name="`networkFunctionCollectorPolicy` Submodule" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionCollectorPolicy <a name="NetworkFunctionCollectorPolicy" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NewNetworkFunctionCollectorPolicy(scope Construct, id *string, config NetworkFunctionCollectorPolicyConfig) NetworkFunctionCollectorPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission">PutIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion">PutIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpfxEmission` <a name="PutIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission"></a>

```go
func PutIpfxEmission(value NetworkFunctionCollectorPolicyIpfxEmission)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `PutIpfxIngestion` <a name="PutIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion"></a>

```go
func PutIpfxIngestion(value NetworkFunctionCollectorPolicyIpfxIngestion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts"></a>

```go
func PutTimeouts(value NetworkFunctionCollectorPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkFunctionCollectorPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkFunctionCollectorPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionCollectorPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission">IpfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion">IpfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput">IpfxEmissionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput">IpfxIngestionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput">TrafficCollectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId">TrafficCollectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpfxEmission`<sup>Required</sup> <a name="IpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission"></a>

```go
func IpfxEmission() NetworkFunctionCollectorPolicyIpfxEmissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a>

---

##### `IpfxIngestion`<sup>Required</sup> <a name="IpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion"></a>

```go
func IpfxIngestion() NetworkFunctionCollectorPolicyIpfxIngestionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts"></a>

```go
func Timeouts() NetworkFunctionCollectorPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpfxEmissionInput`<sup>Optional</sup> <a name="IpfxEmissionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput"></a>

```go
func IpfxEmissionInput() NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `IpfxIngestionInput`<sup>Optional</sup> <a name="IpfxIngestionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput"></a>

```go
func IpfxIngestionInput() NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficCollectorIdInput`<sup>Optional</sup> <a name="TrafficCollectorIdInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput"></a>

```go
func TrafficCollectorIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficCollectorId`<sup>Required</sup> <a name="TrafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId"></a>

```go
func TrafficCollectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionCollectorPolicyConfig <a name="NetworkFunctionCollectorPolicyConfig" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

&networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpfxEmission: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission,
	IpfxIngestion: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion,
	Location: *string,
	Name: *string,
	TrafficCollectorId: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission">IpfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | ipfx_emission block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion">IpfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | ipfx_ingestion block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId">TrafficCollectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpfxEmission`<sup>Required</sup> <a name="IpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission"></a>

```go
IpfxEmission NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

ipfx_emission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}

---

##### `IpfxIngestion`<sup>Required</sup> <a name="IpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion"></a>

```go
IpfxIngestion NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

ipfx_ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}.

---

##### `TrafficCollectorId`<sup>Required</sup> <a name="TrafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId"></a>

```go
TrafficCollectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts"></a>

```go
Timeouts NetworkFunctionCollectorPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}

---

### NetworkFunctionCollectorPolicyIpfxEmission <a name="NetworkFunctionCollectorPolicyIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

&networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicyIpfxEmission {
	DestinationTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes">DestinationTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}. |

---

##### `DestinationTypes`<sup>Required</sup> <a name="DestinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes"></a>

```go
DestinationTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}.

---

### NetworkFunctionCollectorPolicyIpfxIngestion <a name="NetworkFunctionCollectorPolicyIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

&networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicyIpfxIngestion {
	SourceResourceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds">SourceResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}. |

---

##### `SourceResourceIds`<sup>Required</sup> <a name="SourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds"></a>

```go
SourceResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}.

---

### NetworkFunctionCollectorPolicyTimeouts <a name="NetworkFunctionCollectorPolicyTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

&networkfunctioncollectorpolicy.NetworkFunctionCollectorPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionCollectorPolicyIpfxEmissionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxEmissionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NewNetworkFunctionCollectorPolicyIpfxEmissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFunctionCollectorPolicyIpfxEmissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput">DestinationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes">DestinationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTypesInput`<sup>Optional</sup> <a name="DestinationTypesInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput"></a>

```go
func DestinationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationTypes`<sup>Required</sup> <a name="DestinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes"></a>

```go
func DestinationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkFunctionCollectorPolicyIpfxEmission
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---


### NetworkFunctionCollectorPolicyIpfxIngestionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxIngestionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NewNetworkFunctionCollectorPolicyIpfxIngestionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFunctionCollectorPolicyIpfxIngestionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput">SourceResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds">SourceResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceResourceIdsInput`<sup>Optional</sup> <a name="SourceResourceIdsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput"></a>

```go
func SourceResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceResourceIds`<sup>Required</sup> <a name="SourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds"></a>

```go
func SourceResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkFunctionCollectorPolicyIpfxIngestion
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---


### NetworkFunctionCollectorPolicyTimeoutsOutputReference <a name="NetworkFunctionCollectorPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkfunctioncollectorpolicy"

networkfunctioncollectorpolicy.NewNetworkFunctionCollectorPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFunctionCollectorPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



