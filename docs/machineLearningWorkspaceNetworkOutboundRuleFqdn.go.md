# `machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule <a name="`machineLearningWorkspaceNetworkOutboundRuleFqdn` Submodule" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdn <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn azurerm_machine_learning_workspace_network_outbound_rule_fqdn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.NewMachineLearningWorkspaceNetworkOutboundRuleFqdn(scope Construct, id *string, config MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig) MachineLearningWorkspaceNetworkOutboundRuleFqdn
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig">MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig">MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MachineLearningWorkspaceNetworkOutboundRuleFqdn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MachineLearningWorkspaceNetworkOutboundRuleFqdn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspaceNetworkOutboundRuleFqdn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput">DestinationFqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn">DestinationFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeouts"></a>

```go
func Timeouts() MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference</a>

---

##### `DestinationFqdnInput`<sup>Optional</sup> <a name="DestinationFqdnInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdnInput"></a>

```go
func DestinationFqdnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `DestinationFqdn`<sup>Required</sup> <a name="DestinationFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.destinationFqdn"></a>

```go
func DestinationFqdn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdn.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

&machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationFqdn: *string,
	Name: *string,
	WorkspaceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn">DestinationFqdn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationFqdn`<sup>Required</sup> <a name="DestinationFqdn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.destinationFqdn"></a>

```go
DestinationFqdn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#destination_fqdn MachineLearningWorkspaceNetworkOutboundRuleFqdn#destination_fqdn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#name MachineLearningWorkspaceNetworkOutboundRuleFqdn#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#workspace_id MachineLearningWorkspaceNetworkOutboundRuleFqdn#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#id MachineLearningWorkspaceNetworkOutboundRuleFqdn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnConfig.property.timeouts"></a>

```go
Timeouts MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts">MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#timeouts MachineLearningWorkspaceNetworkOutboundRuleFqdn#timeouts}

---

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

&machinelearningworkspacenetworkoutboundrulefqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#create MachineLearningWorkspaceNetworkOutboundRuleFqdn#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#delete MachineLearningWorkspaceNetworkOutboundRuleFqdn#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#read MachineLearningWorkspaceNetworkOutboundRuleFqdn#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/machine_learning_workspace_network_outbound_rule_fqdn#update MachineLearningWorkspaceNetworkOutboundRuleFqdn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference <a name="MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/machinelearningworkspacenetworkoutboundrulefqdn"

machinelearningworkspacenetworkoutboundrulefqdn.NewMachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningWorkspaceNetworkOutboundRuleFqdn.MachineLearningWorkspaceNetworkOutboundRuleFqdnTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



