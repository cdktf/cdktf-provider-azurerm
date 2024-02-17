# `expressRouteCircuitPeering` Submodule <a name="`expressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitPeering <a name="ExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.NewExpressRouteCircuitPeering(scope Construct, id *string, config ExpressRouteCircuitPeeringConfig) ExpressRouteCircuitPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig">PutMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled">ResetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig">ResetMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn">ResetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix">ResetPrimaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId">ResetRouteFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix">ResetSecondaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey">ResetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6"></a>

```go
func PutIpv6(value ExpressRouteCircuitPeeringIpv6)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `PutMicrosoftPeeringConfig` <a name="PutMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig"></a>

```go
func PutMicrosoftPeeringConfig(value ExpressRouteCircuitPeeringMicrosoftPeeringConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts"></a>

```go
func PutTimeouts(value ExpressRouteCircuitPeeringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetIpv4Enabled` <a name="ResetIpv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled"></a>

```go
func ResetIpv4Enabled()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetMicrosoftPeeringConfig` <a name="ResetMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig"></a>

```go
func ResetMicrosoftPeeringConfig()
```

##### `ResetPeerAsn` <a name="ResetPeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn"></a>

```go
func ResetPeerAsn()
```

##### `ResetPrimaryPeerAddressPrefix` <a name="ResetPrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix"></a>

```go
func ResetPrimaryPeerAddressPrefix()
```

##### `ResetRouteFilterId` <a name="ResetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId"></a>

```go
func ResetRouteFilterId()
```

##### `ResetSecondaryPeerAddressPrefix` <a name="ResetSecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix"></a>

```go
func ResetSecondaryPeerAddressPrefix()
```

##### `ResetSharedKey` <a name="ResetSharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey"></a>

```go
func ResetSharedKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.ExpressRouteCircuitPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.ExpressRouteCircuitPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.ExpressRouteCircuitPeering_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.ExpressRouteCircuitPeering_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExpressRouteCircuitPeering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn">AzureAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag">GatewayManagerEtag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig">MicrosoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort">PrimaryAzurePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort">SecondaryAzurePort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">ExpressRouteCircuitNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput">Ipv4EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput">MicrosoftPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput">PeerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput">PeeringTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput">PrimaryPeerAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput">RouteFilterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput">SecondaryPeerAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput">SharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput">VlanIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType">PeeringType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId">RouteFilterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey">SharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId">VlanId</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AzureAsn`<sup>Required</sup> <a name="AzureAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn"></a>

```go
func AzureAsn() *f64
```

- *Type:* *f64

---

##### `GatewayManagerEtag`<sup>Required</sup> <a name="GatewayManagerEtag" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```go
func GatewayManagerEtag() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6"></a>

```go
func Ipv6() ExpressRouteCircuitPeeringIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a>

---

##### `MicrosoftPeeringConfig`<sup>Required</sup> <a name="MicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```go
func MicrosoftPeeringConfig() ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a>

---

##### `PrimaryAzurePort`<sup>Required</sup> <a name="PrimaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```go
func PrimaryAzurePort() *string
```

- *Type:* *string

---

##### `SecondaryAzurePort`<sup>Required</sup> <a name="SecondaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```go
func SecondaryAzurePort() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts"></a>

```go
func Timeouts() ExpressRouteCircuitPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `ExpressRouteCircuitNameInput`<sup>Optional</sup> <a name="ExpressRouteCircuitNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```go
func ExpressRouteCircuitNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Ipv4EnabledInput`<sup>Optional</sup> <a name="Ipv4EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput"></a>

```go
func Ipv4EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input"></a>

```go
func Ipv6Input() ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `MicrosoftPeeringConfigInput`<sup>Optional</sup> <a name="MicrosoftPeeringConfigInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput"></a>

```go
func MicrosoftPeeringConfigInput() ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput"></a>

```go
func PeerAsnInput() *f64
```

- *Type:* *f64

---

##### `PeeringTypeInput`<sup>Optional</sup> <a name="PeeringTypeInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```go
func PeeringTypeInput() *string
```

- *Type:* *string

---

##### `PrimaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput"></a>

```go
func PrimaryPeerAddressPrefixInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RouteFilterIdInput`<sup>Optional</sup> <a name="RouteFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput"></a>

```go
func RouteFilterIdInput() *string
```

- *Type:* *string

---

##### `SecondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput"></a>

```go
func SecondaryPeerAddressPrefixInput() *string
```

- *Type:* *string

---

##### `SharedKeyInput`<sup>Optional</sup> <a name="SharedKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput"></a>

```go
func SharedKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput"></a>

```go
func VlanIdInput() *f64
```

- *Type:* *f64

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```go
func ExpressRouteCircuitName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```go
func Ipv4Enabled() interface{}
```

- *Type:* interface{}

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn"></a>

```go
func PeerAsn() *f64
```

- *Type:* *f64

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType"></a>

```go
func PeeringType() *string
```

- *Type:* *string

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```go
func PrimaryPeerAddressPrefix() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId"></a>

```go
func RouteFilterId() *string
```

- *Type:* *string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```go
func SecondaryPeerAddressPrefix() *string
```

- *Type:* *string

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey"></a>

```go
func SharedKey() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId"></a>

```go
func VlanId() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitPeeringConfig <a name="ExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

&expressroutecircuitpeering.ExpressRouteCircuitPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExpressRouteCircuitName: *string,
	PeeringType: *string,
	ResourceGroupName: *string,
	VlanId: *f64,
	Id: *string,
	Ipv4Enabled: interface{},
	Ipv6: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6,
	MicrosoftPeeringConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig,
	PeerAsn: *f64,
	PrimaryPeerAddressPrefix: *string,
	RouteFilterId: *string,
	SecondaryPeerAddressPrefix: *string,
	SharedKey: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType">PeeringType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId">VlanId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig">MicrosoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn">PeerAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId">RouteFilterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey">SharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```go
ExpressRouteCircuitName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```go
PeeringType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId"></a>

```go
VlanId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4Enabled`<sup>Optional</sup> <a name="Ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled"></a>

```go
Ipv4Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6"></a>

```go
Ipv6 ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `MicrosoftPeeringConfig`<sup>Optional</sup> <a name="MicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig"></a>

```go
MicrosoftPeeringConfig ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `PeerAsn`<sup>Optional</sup> <a name="PeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn"></a>

```go
PeerAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `PrimaryPeerAddressPrefix`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix"></a>

```go
PrimaryPeerAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `RouteFilterId`<sup>Optional</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId"></a>

```go
RouteFilterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `SecondaryPeerAddressPrefix`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix"></a>

```go
SecondaryPeerAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `SharedKey`<sup>Optional</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey"></a>

```go
SharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```go
Timeouts ExpressRouteCircuitPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

### ExpressRouteCircuitPeeringIpv6 <a name="ExpressRouteCircuitPeeringIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

&expressroutecircuitpeering.ExpressRouteCircuitPeeringIpv6 {
	PrimaryPeerAddressPrefix: *string,
	SecondaryPeerAddressPrefix: *string,
	Enabled: interface{},
	MicrosoftPeering: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering,
	RouteFilterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering">MicrosoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | microsoft_peering block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId">RouteFilterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix"></a>

```go
PrimaryPeerAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix"></a>

```go
SecondaryPeerAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

##### `MicrosoftPeering`<sup>Optional</sup> <a name="MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering"></a>

```go
MicrosoftPeering ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

##### `RouteFilterId`<sup>Optional</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId"></a>

```go
RouteFilterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

### ExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

&expressroutecircuitpeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
	AdvertisedCommunities: *[]*string,
	AdvertisedPublicPrefixes: *[]*string,
	CustomerAsn: *f64,
	RoutingRegistryName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName">RoutingRegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `AdvertisedCommunities`<sup>Optional</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities"></a>

```go
AdvertisedCommunities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `AdvertisedPublicPrefixes`<sup>Optional</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes"></a>

```go
AdvertisedPublicPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `CustomerAsn`<sup>Optional</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn"></a>

```go
CustomerAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `RoutingRegistryName`<sup>Optional</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName"></a>

```go
RoutingRegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

&expressroutecircuitpeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
	AdvertisedPublicPrefixes: *[]*string,
	AdvertisedCommunities: *[]*string,
	CustomerAsn: *f64,
	RoutingRegistryName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName">RoutingRegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes"></a>

```go
AdvertisedPublicPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `AdvertisedCommunities`<sup>Optional</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities"></a>

```go
AdvertisedCommunities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `CustomerAsn`<sup>Optional</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn"></a>

```go
CustomerAsn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `RoutingRegistryName`<sup>Optional</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName"></a>

```go
RoutingRegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringTimeouts <a name="ExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

&expressroutecircuitpeering.ExpressRouteCircuitPeeringTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.NewExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities">ResetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes">ResetAdvertisedPublicPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn">ResetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName">ResetRoutingRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedCommunities` <a name="ResetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities"></a>

```go
func ResetAdvertisedCommunities()
```

##### `ResetAdvertisedPublicPrefixes` <a name="ResetAdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes"></a>

```go
func ResetAdvertisedPublicPrefixes()
```

##### `ResetCustomerAsn` <a name="ResetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn"></a>

```go
func ResetCustomerAsn()
```

##### `ResetRoutingRegistryName` <a name="ResetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName"></a>

```go
func ResetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput">AdvertisedCommunitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput">AdvertisedPublicPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput">CustomerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput">RoutingRegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertisedCommunitiesInput`<sup>Optional</sup> <a name="AdvertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput"></a>

```go
func AdvertisedCommunitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedPublicPrefixesInput`<sup>Optional</sup> <a name="AdvertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput"></a>

```go
func AdvertisedPublicPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput"></a>

```go
func CustomerAsnInput() *f64
```

- *Type:* *f64

---

##### `RoutingRegistryNameInput`<sup>Optional</sup> <a name="RoutingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput"></a>

```go
func RoutingRegistryNameInput() *string
```

- *Type:* *string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```go
func AdvertisedCommunities() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```go
func AdvertisedPublicPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```go
func CustomerAsn() *f64
```

- *Type:* *f64

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```go
func RoutingRegistryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### ExpressRouteCircuitPeeringIpv6OutputReference <a name="ExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.NewExpressRouteCircuitPeeringIpv6OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitPeeringIpv6OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering">PutMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering">ResetMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId">ResetRouteFilterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrosoftPeering` <a name="PutMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering"></a>

```go
func PutMicrosoftPeering(value ExpressRouteCircuitPeeringIpv6MicrosoftPeering)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMicrosoftPeering` <a name="ResetMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering"></a>

```go
func ResetMicrosoftPeering()
```

##### `ResetRouteFilterId` <a name="ResetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId"></a>

```go
func ResetRouteFilterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">MicrosoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput">MicrosoftPeeringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput">PrimaryPeerAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput">RouteFilterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput">SecondaryPeerAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">RouteFilterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrosoftPeering`<sup>Required</sup> <a name="MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```go
func MicrosoftPeering() ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftPeeringInput`<sup>Optional</sup> <a name="MicrosoftPeeringInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput"></a>

```go
func MicrosoftPeeringInput() ExpressRouteCircuitPeeringIpv6MicrosoftPeering
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `PrimaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput"></a>

```go
func PrimaryPeerAddressPrefixInput() *string
```

- *Type:* *string

---

##### `RouteFilterIdInput`<sup>Optional</sup> <a name="RouteFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput"></a>

```go
func RouteFilterIdInput() *string
```

- *Type:* *string

---

##### `SecondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput"></a>

```go
func SecondaryPeerAddressPrefixInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```go
func PrimaryPeerAddressPrefix() *string
```

- *Type:* *string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```go
func RouteFilterId() *string
```

- *Type:* *string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```go
func SecondaryPeerAddressPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteCircuitPeeringIpv6
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---


### ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.NewExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities">ResetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn">ResetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName">ResetRoutingRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedCommunities` <a name="ResetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities"></a>

```go
func ResetAdvertisedCommunities()
```

##### `ResetCustomerAsn` <a name="ResetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn"></a>

```go
func ResetCustomerAsn()
```

##### `ResetRoutingRegistryName` <a name="ResetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName"></a>

```go
func ResetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput">AdvertisedCommunitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput">AdvertisedPublicPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput">CustomerAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput">RoutingRegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertisedCommunitiesInput`<sup>Optional</sup> <a name="AdvertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput"></a>

```go
func AdvertisedCommunitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedPublicPrefixesInput`<sup>Optional</sup> <a name="AdvertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput"></a>

```go
func AdvertisedPublicPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput"></a>

```go
func CustomerAsnInput() *f64
```

- *Type:* *f64

---

##### `RoutingRegistryNameInput`<sup>Optional</sup> <a name="RoutingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput"></a>

```go
func RoutingRegistryNameInput() *string
```

- *Type:* *string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```go
func AdvertisedCommunities() *[]*string
```

- *Type:* *[]*string

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```go
func AdvertisedPublicPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```go
func CustomerAsn() *f64
```

- *Type:* *f64

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```go
func RoutingRegistryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteCircuitPeeringMicrosoftPeeringConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### ExpressRouteCircuitPeeringTimeoutsOutputReference <a name="ExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/expressroutecircuitpeering"

expressroutecircuitpeering.NewExpressRouteCircuitPeeringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitPeeringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



