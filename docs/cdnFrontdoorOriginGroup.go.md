# `azurerm_cdn_frontdoor_origin_group`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_origin_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group).

# `cdnFrontdoorOriginGroup` Submodule <a name="`cdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOriginGroup <a name="CdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.NewCdnFrontdoorOriginGroup(scope Construct, id *string, config CdnFrontdoorOriginGroupConfig) CdnFrontdoorOriginGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig">CdnFrontdoorOriginGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig">CdnFrontdoorOriginGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe">PutHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing">PutLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe">ResetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes">ResetRestoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled">ResetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutHealthProbe` <a name="PutHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe"></a>

```go
func PutHealthProbe(value CdnFrontdoorOriginGroupHealthProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `PutLoadBalancing` <a name="PutLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing"></a>

```go
func PutLoadBalancing(value CdnFrontdoorOriginGroupLoadBalancing)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts"></a>

```go
func PutTimeouts(value CdnFrontdoorOriginGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

---

##### `ResetHealthProbe` <a name="ResetHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetHealthProbe"></a>

```go
func ResetHealthProbe()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetRestoreTrafficTimeToHealedOrNewEndpointInMinutes` <a name="ResetRestoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetRestoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```go
func ResetRestoreTrafficTimeToHealedOrNewEndpointInMinutes()
```

##### `ResetSessionAffinityEnabled` <a name="ResetSessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetSessionAffinityEnabled"></a>

```go
func ResetSessionAffinityEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.CdnFrontdoorOriginGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.CdnFrontdoorOriginGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.CdnFrontdoorOriginGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.CdnFrontdoorOriginGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CdnFrontdoorOriginGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CdnFrontdoorOriginGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CdnFrontdoorOriginGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOriginGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput">CdnFrontdoorProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput">HealthProbeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput">LoadBalancingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput">RestoreTrafficTimeToHealedOrNewEndpointInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput">SessionAffinityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">RestoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthProbe`<sup>Required</sup> <a name="HealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbe"></a>

```go
func HealthProbe() CdnFrontdoorOriginGroupHealthProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference">CdnFrontdoorOriginGroupHealthProbeOutputReference</a>

---

##### `LoadBalancing`<sup>Required</sup> <a name="LoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancing"></a>

```go
func LoadBalancing() CdnFrontdoorOriginGroupLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference">CdnFrontdoorOriginGroupLoadBalancingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeouts"></a>

```go
func Timeouts() CdnFrontdoorOriginGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference">CdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `CdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="CdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileIdInput"></a>

```go
func CdnFrontdoorProfileIdInput() *string
```

- *Type:* *string

---

##### `HealthProbeInput`<sup>Optional</sup> <a name="HealthProbeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.healthProbeInput"></a>

```go
func HealthProbeInput() CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancingInput`<sup>Optional</sup> <a name="LoadBalancingInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.loadBalancingInput"></a>

```go
func LoadBalancingInput() CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RestoreTrafficTimeToHealedOrNewEndpointInMinutesInput`<sup>Optional</sup> <a name="RestoreTrafficTimeToHealedOrNewEndpointInMinutesInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutesInput"></a>

```go
func RestoreTrafficTimeToHealedOrNewEndpointInMinutesInput() *f64
```

- *Type:* *f64

---

##### `SessionAffinityEnabledInput`<sup>Optional</sup> <a name="SessionAffinityEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabledInput"></a>

```go
func SessionAffinityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```go
func CdnFrontdoorProfileId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RestoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Required</sup> <a name="RestoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```go
func RestoreTrafficTimeToHealedOrNewEndpointInMinutes() *f64
```

- *Type:* *f64

---

##### `SessionAffinityEnabled`<sup>Required</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```go
func SessionAffinityEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginGroupConfig <a name="CdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

&cdnfrontdoororigingroup.CdnFrontdoorOriginGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CdnFrontdoorProfileId: *string,
	LoadBalancing: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing,
	Name: *string,
	HealthProbe: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe,
	Id: *string,
	RestoreTrafficTimeToHealedOrNewEndpointInMinutes: *f64,
	SessionAffinityEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing">LoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe">HealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">RestoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.cdnFrontdoorProfileId"></a>

```go
CdnFrontdoorProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#cdn_frontdoor_profile_id CdnFrontdoorOriginGroup#cdn_frontdoor_profile_id}.

---

##### `LoadBalancing`<sup>Required</sup> <a name="LoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.loadBalancing"></a>

```go
LoadBalancing CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#load_balancing CdnFrontdoorOriginGroup#load_balancing}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#name CdnFrontdoorOriginGroup#name}.

---

##### `HealthProbe`<sup>Optional</sup> <a name="HealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.healthProbe"></a>

```go
HealthProbe CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#health_probe CdnFrontdoorOriginGroup#health_probe}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#id CdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Optional</sup> <a name="RestoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```go
RestoreTrafficTimeToHealedOrNewEndpointInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#restore_traffic_time_to_healed_or_new_endpoint_in_minutes CdnFrontdoorOriginGroup#restore_traffic_time_to_healed_or_new_endpoint_in_minutes}.

---

##### `SessionAffinityEnabled`<sup>Optional</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.sessionAffinityEnabled"></a>

```go
SessionAffinityEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#session_affinity_enabled CdnFrontdoorOriginGroup#session_affinity_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```go
Timeouts CdnFrontdoorOriginGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts">CdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#timeouts CdnFrontdoorOriginGroup#timeouts}

---

### CdnFrontdoorOriginGroupHealthProbe <a name="CdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

&cdnfrontdoororigingroup.CdnFrontdoorOriginGroupHealthProbe {
	IntervalInSeconds: *f64,
	Protocol: *string,
	Path: *string,
	RequestType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType">RequestType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}. |

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.intervalInSeconds"></a>

```go
IntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#interval_in_seconds CdnFrontdoorOriginGroup#interval_in_seconds}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#protocol CdnFrontdoorOriginGroup#protocol}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#path CdnFrontdoorOriginGroup#path}.

---

##### `RequestType`<sup>Optional</sup> <a name="RequestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe.property.requestType"></a>

```go
RequestType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#request_type CdnFrontdoorOriginGroup#request_type}.

---

### CdnFrontdoorOriginGroupLoadBalancing <a name="CdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

&cdnfrontdoororigingroup.CdnFrontdoorOriginGroupLoadBalancing {
	AdditionalLatencyInMilliseconds: *f64,
	SampleSize: *f64,
	SuccessfulSamplesRequired: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds">AdditionalLatencyInMilliseconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}. |

---

##### `AdditionalLatencyInMilliseconds`<sup>Optional</sup> <a name="AdditionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.additionalLatencyInMilliseconds"></a>

```go
AdditionalLatencyInMilliseconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#additional_latency_in_milliseconds CdnFrontdoorOriginGroup#additional_latency_in_milliseconds}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.sampleSize"></a>

```go
SampleSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#sample_size CdnFrontdoorOriginGroup#sample_size}.

---

##### `SuccessfulSamplesRequired`<sup>Optional</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing.property.successfulSamplesRequired"></a>

```go
SuccessfulSamplesRequired *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#successful_samples_required CdnFrontdoorOriginGroup#successful_samples_required}.

---

### CdnFrontdoorOriginGroupTimeouts <a name="CdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

&cdnfrontdoororigingroup.CdnFrontdoorOriginGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#create CdnFrontdoorOriginGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#delete CdnFrontdoorOriginGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#read CdnFrontdoorOriginGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/cdn_frontdoor_origin_group#update CdnFrontdoorOriginGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginGroupHealthProbeOutputReference <a name="CdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.NewCdnFrontdoorOriginGroupHealthProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorOriginGroupHealthProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType">ResetRequestType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetRequestType` <a name="ResetRequestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.resetRequestType"></a>

```go
func ResetRequestType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput">RequestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">RequestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```go
func IntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RequestTypeInput`<sup>Optional</sup> <a name="RequestTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestTypeInput"></a>

```go
func RequestTypeInput() *string
```

- *Type:* *string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestType`<sup>Required</sup> <a name="RequestType" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```go
func RequestType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorOriginGroupHealthProbe
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupHealthProbe">CdnFrontdoorOriginGroupHealthProbe</a>

---


### CdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="CdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.NewCdnFrontdoorOriginGroupLoadBalancingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorOriginGroupLoadBalancingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds">ResetAdditionalLatencyInMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired">ResetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalLatencyInMilliseconds` <a name="ResetAdditionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetAdditionalLatencyInMilliseconds"></a>

```go
func ResetAdditionalLatencyInMilliseconds()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSampleSize"></a>

```go
func ResetSampleSize()
```

##### `ResetSuccessfulSamplesRequired` <a name="ResetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```go
func ResetSuccessfulSamplesRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput">AdditionalLatencyInMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput">SuccessfulSamplesRequiredInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">AdditionalLatencyInMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">SampleSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalLatencyInMillisecondsInput`<sup>Optional</sup> <a name="AdditionalLatencyInMillisecondsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMillisecondsInput"></a>

```go
func AdditionalLatencyInMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSizeInput"></a>

```go
func SampleSizeInput() *f64
```

- *Type:* *f64

---

##### `SuccessfulSamplesRequiredInput`<sup>Optional</sup> <a name="SuccessfulSamplesRequiredInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```go
func SuccessfulSamplesRequiredInput() *f64
```

- *Type:* *f64

---

##### `AdditionalLatencyInMilliseconds`<sup>Required</sup> <a name="AdditionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```go
func AdditionalLatencyInMilliseconds() *f64
```

- *Type:* *f64

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```go
func SampleSize() *f64
```

- *Type:* *f64

---

##### `SuccessfulSamplesRequired`<sup>Required</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```go
func SuccessfulSamplesRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```go
func InternalValue() CdnFrontdoorOriginGroupLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupLoadBalancing">CdnFrontdoorOriginGroupLoadBalancing</a>

---


### CdnFrontdoorOriginGroupTimeoutsOutputReference <a name="CdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/cdnfrontdoororigingroup"

cdnfrontdoororigingroup.NewCdnFrontdoorOriginGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CdnFrontdoorOriginGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOriginGroup.CdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



