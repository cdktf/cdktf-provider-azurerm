# `networkManagerVerifierWorkspaceReachabilityAnalysisIntent` Submodule <a name="`networkManagerVerifierWorkspaceReachabilityAnalysisIntent` Submodule" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent azurerm_network_manager_verifier_workspace_reachability_analysis_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NewNetworkManagerVerifierWorkspaceReachabilityAnalysisIntent(scope Construct, id *string, config NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig) NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putIpTraffic">PutIpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpTraffic` <a name="PutIpTraffic" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putIpTraffic"></a>

```go
func PutIpTraffic(value NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putIpTraffic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putTimeouts"></a>

```go
func PutTimeouts(value NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.ipTraffic">IpTraffic</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.destinationResourceIdInput">DestinationResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.ipTrafficInput">IpTrafficInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.verifierWorkspaceIdInput">VerifierWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.verifierWorkspaceId">VerifierWorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpTraffic`<sup>Required</sup> <a name="IpTraffic" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.ipTraffic"></a>

```go
func IpTraffic() NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.timeouts"></a>

```go
func Timeouts() NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationResourceIdInput`<sup>Optional</sup> <a name="DestinationResourceIdInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.destinationResourceIdInput"></a>

```go
func DestinationResourceIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpTrafficInput`<sup>Optional</sup> <a name="IpTrafficInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.ipTrafficInput"></a>

```go
func IpTrafficInput() NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VerifierWorkspaceIdInput`<sup>Optional</sup> <a name="VerifierWorkspaceIdInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.verifierWorkspaceIdInput"></a>

```go
func VerifierWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.destinationResourceId"></a>

```go
func DestinationResourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

##### `VerifierWorkspaceId`<sup>Required</sup> <a name="VerifierWorkspaceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.verifierWorkspaceId"></a>

```go
func VerifierWorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

&networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationResourceId: *string,
	IpTraffic: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic,
	Name: *string,
	SourceResourceId: *string,
	VerifierWorkspaceId: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.destinationResourceId">DestinationResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.ipTraffic">IpTraffic</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a></code> | ip_traffic block. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#name NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.verifierWorkspaceId">VerifierWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#verifier_workspace_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#verifier_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#description NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationResourceId`<sup>Required</sup> <a name="DestinationResourceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.destinationResourceId"></a>

```go
DestinationResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_resource_id}.

---

##### `IpTraffic`<sup>Required</sup> <a name="IpTraffic" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.ipTraffic"></a>

```go
IpTraffic NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a>

ip_traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#ip_traffic NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#ip_traffic}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#name NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#name}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_resource_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_resource_id}.

---

##### `VerifierWorkspaceId`<sup>Required</sup> <a name="VerifierWorkspaceId" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.verifierWorkspaceId"></a>

```go
VerifierWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#verifier_workspace_id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#verifier_workspace_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#description NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#id NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentConfig.property.timeouts"></a>

```go
Timeouts NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#timeouts NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#timeouts}

---

### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

&networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic {
	DestinationIps: *[]*string,
	DestinationPorts: *[]*string,
	Protocols: *[]*string,
	SourceIps: *[]*string,
	SourcePorts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.destinationIps">DestinationIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ips}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#protocols NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.sourceIps">SourceIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ips}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ports}. |

---

##### `DestinationIps`<sup>Required</sup> <a name="DestinationIps" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.destinationIps"></a>

```go
DestinationIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ips}.

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#destination_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#destination_ports}.

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#protocols NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#protocols}.

---

##### `SourceIps`<sup>Required</sup> <a name="SourceIps" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.sourceIps"></a>

```go
SourceIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ips NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ips}.

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#source_ports NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#source_ports}.

---

### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

&networkmanagerverifierworkspacereachabilityanalysisintent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#create NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#delete NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#read NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#create NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#delete NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/network_manager_verifier_workspace_reachability_analysis_intent#read NetworkManagerVerifierWorkspaceReachabilityAnalysisIntent#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NewNetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationIpsInput">DestinationIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourceIpsInput">SourceIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationIps">DestinationIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourceIps">SourceIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIpsInput`<sup>Optional</sup> <a name="DestinationIpsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationIpsInput"></a>

```go
func DestinationIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIpsInput`<sup>Optional</sup> <a name="SourceIpsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourceIpsInput"></a>

```go
func SourceIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIps`<sup>Required</sup> <a name="DestinationIps" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationIps"></a>

```go
func DestinationIps() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceIps`<sup>Required</sup> <a name="SourceIps" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourceIps"></a>

```go
func SourceIps() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic">NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentIpTraffic</a>

---


### NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference <a name="NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/networkmanagerverifierworkspacereachabilityanalysisintent"

networkmanagerverifierworkspacereachabilityanalysisintent.NewNetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkManagerVerifierWorkspaceReachabilityAnalysisIntent.NetworkManagerVerifierWorkspaceReachabilityAnalysisIntentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



