# `synapseIntegrationRuntimeAzure` Submodule <a name="`synapseIntegrationRuntimeAzure` Submodule" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseIntegrationRuntimeAzure <a name="SynapseIntegrationRuntimeAzure" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure azurerm_synapse_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.NewSynapseIntegrationRuntimeAzure(scope Construct, id *string, config SynapseIntegrationRuntimeAzureConfig) SynapseIntegrationRuntimeAzure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig">SynapseIntegrationRuntimeAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig">SynapseIntegrationRuntimeAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin">ResetTimeToLiveMin</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts"></a>

```go
func PutTimeouts(value SynapseIntegrationRuntimeAzureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType"></a>

```go
func ResetComputeType()
```

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount"></a>

```go
func ResetCoreCount()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeToLiveMin` <a name="ResetTimeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```go
func ResetTimeToLiveMin()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzure_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SynapseIntegrationRuntimeAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SynapseIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SynapseIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput">ComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput">CoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput">TimeToLiveMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount">CoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts"></a>

```go
func Timeouts() SynapseIntegrationRuntimeAzureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput"></a>

```go
func ComputeTypeInput() *string
```

- *Type:* *string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput"></a>

```go
func CoreCountInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput"></a>

```go
func SynapseWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeToLiveMinInput`<sup>Optional</sup> <a name="TimeToLiveMinInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```go
func TimeToLiveMinInput() *f64
```

- *Type:* *f64

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount"></a>

```go
func CoreCount() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId"></a>

```go
func SynapseWorkspaceId() *string
```

- *Type:* *string

---

##### `TimeToLiveMin`<sup>Required</sup> <a name="TimeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```go
func TimeToLiveMin() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseIntegrationRuntimeAzureConfig <a name="SynapseIntegrationRuntimeAzureConfig" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

&synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	SynapseWorkspaceId: *string,
	ComputeType: *string,
	CoreCount: *f64,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts,
	TimeToLiveMin: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType">ComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount">CoreCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin">TimeToLiveMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId"></a>

```go
SynapseWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}.

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType"></a>

```go
ComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}.

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount"></a>

```go
CoreCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts"></a>

```go
Timeouts SynapseIntegrationRuntimeAzureTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#timeouts SynapseIntegrationRuntimeAzure#timeouts}

---

##### `TimeToLiveMin`<sup>Optional</sup> <a name="TimeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```go
TimeToLiveMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}.

---

### SynapseIntegrationRuntimeAzureTimeouts <a name="SynapseIntegrationRuntimeAzureTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

&synapseintegrationruntimeazure.SynapseIntegrationRuntimeAzureTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseIntegrationRuntimeAzureTimeoutsOutputReference <a name="SynapseIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/synapseintegrationruntimeazure"

synapseintegrationruntimeazure.NewSynapseIntegrationRuntimeAzureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SynapseIntegrationRuntimeAzureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



