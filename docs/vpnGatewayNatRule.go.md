# `vpnGatewayNatRule` Submodule <a name="`vpnGatewayNatRule` Submodule" id="@cdktf/provider-azurerm.vpnGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayNatRule <a name="VpnGatewayNatRule" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRule(scope Construct, id *string, config VpnGatewayNatRuleConfig) VpnGatewayNatRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping">PutExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping">PutInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalAddressSpaceMappings">ResetExternalAddressSpaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping">ResetExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalAddressSpaceMappings">ResetInternalAddressSpaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping">ResetInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId">ResetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalMapping` <a name="PutExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping"></a>

```go
func PutExternalMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInternalMapping` <a name="PutInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping"></a>

```go
func PutInternalMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts"></a>

```go
func PutTimeouts(value VpnGatewayNatRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `ResetExternalAddressSpaceMappings` <a name="ResetExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalAddressSpaceMappings"></a>

```go
func ResetExternalAddressSpaceMappings()
```

##### `ResetExternalMapping` <a name="ResetExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping"></a>

```go
func ResetExternalMapping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInternalAddressSpaceMappings` <a name="ResetInternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalAddressSpaceMappings"></a>

```go
func ResetInternalAddressSpaceMappings()
```

##### `ResetInternalMapping` <a name="ResetInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping"></a>

```go
func ResetInternalMapping()
```

##### `ResetIpConfigurationId` <a name="ResetIpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId"></a>

```go
func ResetIpConfigurationId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode"></a>

```go
func ResetMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.VpnGatewayNatRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.VpnGatewayNatRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.VpnGatewayNatRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.VpnGatewayNatRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnGatewayNatRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping">ExternalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping">InternalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappingsInput">ExternalAddressSpaceMappingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput">ExternalMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappingsInput">InternalAddressSpaceMappingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput">InternalMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput">IpConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappings">ExternalAddressSpaceMappings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappings">InternalAddressSpaceMappings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalMapping`<sup>Required</sup> <a name="ExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping"></a>

```go
func ExternalMapping() VpnGatewayNatRuleExternalMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a>

---

##### `InternalMapping`<sup>Required</sup> <a name="InternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping"></a>

```go
func InternalMapping() VpnGatewayNatRuleInternalMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts"></a>

```go
func Timeouts() VpnGatewayNatRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a>

---

##### `ExternalAddressSpaceMappingsInput`<sup>Optional</sup> <a name="ExternalAddressSpaceMappingsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappingsInput"></a>

```go
func ExternalAddressSpaceMappingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalMappingInput`<sup>Optional</sup> <a name="ExternalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput"></a>

```go
func ExternalMappingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalAddressSpaceMappingsInput`<sup>Optional</sup> <a name="InternalAddressSpaceMappingsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappingsInput"></a>

```go
func InternalAddressSpaceMappingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InternalMappingInput`<sup>Optional</sup> <a name="InternalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput"></a>

```go
func InternalMappingInput() interface{}
```

- *Type:* interface{}

---

##### `IpConfigurationIdInput`<sup>Optional</sup> <a name="IpConfigurationIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput"></a>

```go
func IpConfigurationIdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput"></a>

```go
func VpnGatewayIdInput() *string
```

- *Type:* *string

---

##### `ExternalAddressSpaceMappings`<sup>Required</sup> <a name="ExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappings"></a>

```go
func ExternalAddressSpaceMappings() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalAddressSpaceMappings`<sup>Required</sup> <a name="InternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappings"></a>

```go
func InternalAddressSpaceMappings() *[]*string
```

- *Type:* *[]*string

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId"></a>

```go
func IpConfigurationId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId"></a>

```go
func VpnGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayNatRuleConfig <a name="VpnGatewayNatRuleConfig" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

&vpngatewaynatrule.VpnGatewayNatRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	VpnGatewayId: *string,
	ExternalAddressSpaceMappings: *[]*string,
	ExternalMapping: interface{},
	Id: *string,
	InternalAddressSpaceMappings: *[]*string,
	InternalMapping: interface{},
	IpConfigurationId: *string,
	Mode: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#resource_group_name VpnGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalAddressSpaceMappings">ExternalAddressSpaceMappings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping">ExternalMapping</a></code> | <code>interface{}</code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalAddressSpaceMappings">InternalAddressSpaceMappings</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping">InternalMapping</a></code> | <code>interface{}</code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId">IpConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#resource_group_name VpnGatewayNatRule#resource_group_name}.

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId"></a>

```go
VpnGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}.

---

##### `ExternalAddressSpaceMappings`<sup>Optional</sup> <a name="ExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalAddressSpaceMappings"></a>

```go
ExternalAddressSpaceMappings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}.

---

##### `ExternalMapping`<sup>Optional</sup> <a name="ExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping"></a>

```go
ExternalMapping interface{}
```

- *Type:* interface{}

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalAddressSpaceMappings`<sup>Optional</sup> <a name="InternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalAddressSpaceMappings"></a>

```go
InternalAddressSpaceMappings *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}.

---

##### `InternalMapping`<sup>Optional</sup> <a name="InternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping"></a>

```go
InternalMapping interface{}
```

- *Type:* interface{}

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}

---

##### `IpConfigurationId`<sup>Optional</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId"></a>

```go
IpConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts"></a>

```go
Timeouts VpnGatewayNatRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}.

---

### VpnGatewayNatRuleExternalMapping <a name="VpnGatewayNatRuleExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

&vpngatewaynatrule.VpnGatewayNatRuleExternalMapping {
	AddressSpace: *string,
	PortRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace">AddressSpace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange">PortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace"></a>

```go
AddressSpace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleInternalMapping <a name="VpnGatewayNatRuleInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

&vpngatewaynatrule.VpnGatewayNatRuleInternalMapping {
	AddressSpace: *string,
	PortRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace">AddressSpace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange">PortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace"></a>

```go
AddressSpace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange"></a>

```go
PortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleTimeouts <a name="VpnGatewayNatRuleTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

&vpngatewaynatrule.VpnGatewayNatRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayNatRuleExternalMappingList <a name="VpnGatewayNatRuleExternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRuleExternalMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayNatRuleExternalMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get"></a>

```go
func Get(index *f64) VpnGatewayNatRuleExternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayNatRuleExternalMappingOutputReference <a name="VpnGatewayNatRuleExternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRuleExternalMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayNatRuleExternalMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```go
func AddressSpaceInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```go
func AddressSpace() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayNatRuleInternalMappingList <a name="VpnGatewayNatRuleInternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRuleInternalMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnGatewayNatRuleInternalMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get"></a>

```go
func Get(index *f64) VpnGatewayNatRuleInternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayNatRuleInternalMappingOutputReference <a name="VpnGatewayNatRuleInternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRuleInternalMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnGatewayNatRuleInternalMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```go
func AddressSpaceInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() *string
```

- *Type:* *string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```go
func AddressSpace() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnGatewayNatRuleTimeoutsOutputReference <a name="VpnGatewayNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/vpngatewaynatrule"

vpngatewaynatrule.NewVpnGatewayNatRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnGatewayNatRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



