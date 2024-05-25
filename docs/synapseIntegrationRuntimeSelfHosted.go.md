# `synapseIntegrationRuntimeSelfHosted` Submodule <a name="`synapseIntegrationRuntimeSelfHosted` Submodule" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseIntegrationRuntimeSelfHosted <a name="SynapseIntegrationRuntimeSelfHosted" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted azurerm_synapse_integration_runtime_self_hosted}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.NewSynapseIntegrationRuntimeSelfHosted(scope Construct, id *string, config SynapseIntegrationRuntimeSelfHostedConfig) SynapseIntegrationRuntimeSelfHosted
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig">SynapseIntegrationRuntimeSelfHostedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig">SynapseIntegrationRuntimeSelfHostedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts"></a>

```go
func PutTimeouts(value SynapseIntegrationRuntimeSelfHostedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHosted_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHosted_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHosted_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHosted_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseIntegrationRuntimeSelfHosted resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseIntegrationRuntimeSelfHosted to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseIntegrationRuntimeSelfHosted that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseIntegrationRuntimeSelfHosted to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeyPrimary">AuthorizationKeyPrimary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeySecondary">AuthorizationKeySecondary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference">SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationKeyPrimary`<sup>Required</sup> <a name="AuthorizationKeyPrimary" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeyPrimary"></a>

```go
func AuthorizationKeyPrimary() *string
```

- *Type:* *string

---

##### `AuthorizationKeySecondary`<sup>Required</sup> <a name="AuthorizationKeySecondary" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.authorizationKeySecondary"></a>

```go
func AuthorizationKeySecondary() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeouts"></a>

```go
func Timeouts() SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference">SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceIdInput"></a>

```go
func SynapseWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.synapseWorkspaceId"></a>

```go
func SynapseWorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHosted.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseIntegrationRuntimeSelfHostedConfig <a name="SynapseIntegrationRuntimeSelfHostedConfig" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

&synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHostedConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SynapseWorkspaceId: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#name SynapseIntegrationRuntimeSelfHosted#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#synapse_workspace_id SynapseIntegrationRuntimeSelfHosted#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#description SynapseIntegrationRuntimeSelfHosted#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#id SynapseIntegrationRuntimeSelfHosted#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#name SynapseIntegrationRuntimeSelfHosted#name}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.synapseWorkspaceId"></a>

```go
SynapseWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#synapse_workspace_id SynapseIntegrationRuntimeSelfHosted#synapse_workspace_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#description SynapseIntegrationRuntimeSelfHosted#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#id SynapseIntegrationRuntimeSelfHosted#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedConfig.property.timeouts"></a>

```go
Timeouts SynapseIntegrationRuntimeSelfHostedTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts">SynapseIntegrationRuntimeSelfHostedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#timeouts SynapseIntegrationRuntimeSelfHosted#timeouts}

---

### SynapseIntegrationRuntimeSelfHostedTimeouts <a name="SynapseIntegrationRuntimeSelfHostedTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

&synapseintegrationruntimeselfhosted.SynapseIntegrationRuntimeSelfHostedTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#create SynapseIntegrationRuntimeSelfHosted#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#delete SynapseIntegrationRuntimeSelfHosted#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#read SynapseIntegrationRuntimeSelfHosted#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#update SynapseIntegrationRuntimeSelfHosted#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#create SynapseIntegrationRuntimeSelfHosted#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#delete SynapseIntegrationRuntimeSelfHosted#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#read SynapseIntegrationRuntimeSelfHosted#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/synapse_integration_runtime_self_hosted#update SynapseIntegrationRuntimeSelfHosted#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference <a name="SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/synapseintegrationruntimeselfhosted"

synapseintegrationruntimeselfhosted.NewSynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeSelfHosted.SynapseIntegrationRuntimeSelfHostedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



