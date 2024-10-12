# `trafficManagerProfile` Submodule <a name="`trafficManagerProfile` Submodule" id="@cdktf/provider-azurerm.trafficManagerProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TrafficManagerProfile <a name="TrafficManagerProfile" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile azurerm_traffic_manager_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfile(scope Construct, id *string, config TrafficManagerProfileConfig) TrafficManagerProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig">TrafficManagerProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig">TrafficManagerProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig">PutMonitorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetMaxReturn">ResetMaxReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetProfileStatus">ResetProfileStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTrafficViewEnabled">ResetTrafficViewEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig"></a>

```go
func PutDnsConfig(value TrafficManagerProfileDnsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---

##### `PutMonitorConfig` <a name="PutMonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig"></a>

```go
func PutMonitorConfig(value TrafficManagerProfileMonitorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putMonitorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts"></a>

```go
func PutTimeouts(value TrafficManagerProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxReturn` <a name="ResetMaxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetMaxReturn"></a>

```go
func ResetMaxReturn()
```

##### `ResetProfileStatus` <a name="ResetProfileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetProfileStatus"></a>

```go
func ResetProfileStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrafficViewEnabled` <a name="ResetTrafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.resetTrafficViewEnabled"></a>

```go
func ResetTrafficViewEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TrafficManagerProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.TrafficManagerProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.TrafficManagerProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.TrafficManagerProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.TrafficManagerProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TrafficManagerProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TrafficManagerProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TrafficManagerProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TrafficManagerProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference">TrafficManagerProfileDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfig">MonitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference">TrafficManagerProfileMonitorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference">TrafficManagerProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturnInput">MaxReturnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfigInput">MonitorConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatusInput">ProfileStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethodInput">TrafficRoutingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabledInput">TrafficViewEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturn">MaxReturn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatus">ProfileStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethod">TrafficRoutingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabled">TrafficViewEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfig"></a>

```go
func DnsConfig() TrafficManagerProfileDnsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference">TrafficManagerProfileDnsConfigOutputReference</a>

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `MonitorConfig`<sup>Required</sup> <a name="MonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfig"></a>

```go
func MonitorConfig() TrafficManagerProfileMonitorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference">TrafficManagerProfileMonitorConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeouts"></a>

```go
func Timeouts() TrafficManagerProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference">TrafficManagerProfileTimeoutsOutputReference</a>

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.dnsConfigInput"></a>

```go
func DnsConfigInput() TrafficManagerProfileDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxReturnInput`<sup>Optional</sup> <a name="MaxReturnInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturnInput"></a>

```go
func MaxReturnInput() *f64
```

- *Type:* *f64

---

##### `MonitorConfigInput`<sup>Optional</sup> <a name="MonitorConfigInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.monitorConfigInput"></a>

```go
func MonitorConfigInput() TrafficManagerProfileMonitorConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProfileStatusInput`<sup>Optional</sup> <a name="ProfileStatusInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatusInput"></a>

```go
func ProfileStatusInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficRoutingMethodInput`<sup>Optional</sup> <a name="TrafficRoutingMethodInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethodInput"></a>

```go
func TrafficRoutingMethodInput() *string
```

- *Type:* *string

---

##### `TrafficViewEnabledInput`<sup>Optional</sup> <a name="TrafficViewEnabledInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabledInput"></a>

```go
func TrafficViewEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxReturn`<sup>Required</sup> <a name="MaxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.maxReturn"></a>

```go
func MaxReturn() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileStatus`<sup>Required</sup> <a name="ProfileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.profileStatus"></a>

```go
func ProfileStatus() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TrafficRoutingMethod`<sup>Required</sup> <a name="TrafficRoutingMethod" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficRoutingMethod"></a>

```go
func TrafficRoutingMethod() *string
```

- *Type:* *string

---

##### `TrafficViewEnabled`<sup>Required</sup> <a name="TrafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.trafficViewEnabled"></a>

```go
func TrafficViewEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TrafficManagerProfileConfig <a name="TrafficManagerProfileConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

&trafficmanagerprofile.TrafficManagerProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig,
	MonitorConfig: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig,
	Name: *string,
	ResourceGroupName: *string,
	TrafficRoutingMethod: *string,
	Id: *string,
	MaxReturn: *f64,
	ProfileStatus: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts,
	TrafficViewEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.monitorConfig">MonitorConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | monitor_config block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficRoutingMethod">TrafficRoutingMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.maxReturn">MaxReturn</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.profileStatus">ProfileStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficViewEnabled">TrafficViewEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.dnsConfig"></a>

```go
DnsConfig TrafficManagerProfileDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#dns_config TrafficManagerProfile#dns_config}

---

##### `MonitorConfig`<sup>Required</sup> <a name="MonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.monitorConfig"></a>

```go
MonitorConfig TrafficManagerProfileMonitorConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

monitor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#monitor_config TrafficManagerProfile#monitor_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#resource_group_name TrafficManagerProfile#resource_group_name}.

---

##### `TrafficRoutingMethod`<sup>Required</sup> <a name="TrafficRoutingMethod" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficRoutingMethod"></a>

```go
TrafficRoutingMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#traffic_routing_method TrafficManagerProfile#traffic_routing_method}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#id TrafficManagerProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxReturn`<sup>Optional</sup> <a name="MaxReturn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.maxReturn"></a>

```go
MaxReturn *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#max_return TrafficManagerProfile#max_return}.

---

##### `ProfileStatus`<sup>Optional</sup> <a name="ProfileStatus" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.profileStatus"></a>

```go
ProfileStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#profile_status TrafficManagerProfile#profile_status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#tags TrafficManagerProfile#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.timeouts"></a>

```go
Timeouts TrafficManagerProfileTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts">TrafficManagerProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#timeouts TrafficManagerProfile#timeouts}

---

##### `TrafficViewEnabled`<sup>Optional</sup> <a name="TrafficViewEnabled" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileConfig.property.trafficViewEnabled"></a>

```go
TrafficViewEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#traffic_view_enabled TrafficManagerProfile#traffic_view_enabled}.

---

### TrafficManagerProfileDnsConfig <a name="TrafficManagerProfileDnsConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

&trafficmanagerprofile.TrafficManagerProfileDnsConfig {
	RelativeName: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.relativeName">RelativeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#relative_name TrafficManagerProfile#relative_name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#ttl TrafficManagerProfile#ttl}. |

---

##### `RelativeName`<sup>Required</sup> <a name="RelativeName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.relativeName"></a>

```go
RelativeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#relative_name TrafficManagerProfile#relative_name}.

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#ttl TrafficManagerProfile#ttl}.

---

### TrafficManagerProfileMonitorConfig <a name="TrafficManagerProfileMonitorConfig" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

&trafficmanagerprofile.TrafficManagerProfileMonitorConfig {
	Port: *f64,
	Protocol: *string,
	CustomHeader: interface{},
	ExpectedStatusCodeRanges: *[]*string,
	IntervalInSeconds: *f64,
	Path: *string,
	TimeoutInSeconds: *f64,
	ToleratedNumberOfFailures: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#port TrafficManagerProfile#port}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#protocol TrafficManagerProfile#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.customHeader">CustomHeader</a></code> | <code>interface{}</code> | custom_header block. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.expectedStatusCodeRanges">ExpectedStatusCodeRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#interval_in_seconds TrafficManagerProfile#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#path TrafficManagerProfile#path}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.toleratedNumberOfFailures">ToleratedNumberOfFailures</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#port TrafficManagerProfile#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#protocol TrafficManagerProfile#protocol}.

---

##### `CustomHeader`<sup>Optional</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.customHeader"></a>

```go
CustomHeader interface{}
```

- *Type:* interface{}

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#custom_header TrafficManagerProfile#custom_header}

---

##### `ExpectedStatusCodeRanges`<sup>Optional</sup> <a name="ExpectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.expectedStatusCodeRanges"></a>

```go
ExpectedStatusCodeRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#expected_status_code_ranges TrafficManagerProfile#expected_status_code_ranges}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.intervalInSeconds"></a>

```go
IntervalInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#interval_in_seconds TrafficManagerProfile#interval_in_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#path TrafficManagerProfile#path}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#timeout_in_seconds TrafficManagerProfile#timeout_in_seconds}.

---

##### `ToleratedNumberOfFailures`<sup>Optional</sup> <a name="ToleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig.property.toleratedNumberOfFailures"></a>

```go
ToleratedNumberOfFailures *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#tolerated_number_of_failures TrafficManagerProfile#tolerated_number_of_failures}.

---

### TrafficManagerProfileMonitorConfigCustomHeader <a name="TrafficManagerProfileMonitorConfigCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

&trafficmanagerprofile.TrafficManagerProfileMonitorConfigCustomHeader {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#value TrafficManagerProfile#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#name TrafficManagerProfile#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#value TrafficManagerProfile#value}.

---

### TrafficManagerProfileTimeouts <a name="TrafficManagerProfileTimeouts" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

&trafficmanagerprofile.TrafficManagerProfileTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#create TrafficManagerProfile#create}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#delete TrafficManagerProfile#delete}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#read TrafficManagerProfile#read}. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#update TrafficManagerProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#create TrafficManagerProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#delete TrafficManagerProfile#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#read TrafficManagerProfile#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/traffic_manager_profile#update TrafficManagerProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TrafficManagerProfileDnsConfigOutputReference <a name="TrafficManagerProfileDnsConfigOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfileDnsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TrafficManagerProfileDnsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeNameInput">RelativeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeName">RelativeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelativeNameInput`<sup>Optional</sup> <a name="RelativeNameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeNameInput"></a>

```go
func RelativeNameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `RelativeName`<sup>Required</sup> <a name="RelativeName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.relativeName"></a>

```go
func RelativeName() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() TrafficManagerProfileDnsConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileDnsConfig">TrafficManagerProfileDnsConfig</a>

---


### TrafficManagerProfileMonitorConfigCustomHeaderList <a name="TrafficManagerProfileMonitorConfigCustomHeaderList" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfileMonitorConfigCustomHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TrafficManagerProfileMonitorConfigCustomHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get"></a>

```go
func Get(index *f64) TrafficManagerProfileMonitorConfigCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerProfileMonitorConfigCustomHeaderOutputReference <a name="TrafficManagerProfileMonitorConfigCustomHeaderOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfileMonitorConfigCustomHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TrafficManagerProfileMonitorConfigCustomHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TrafficManagerProfileMonitorConfigOutputReference <a name="TrafficManagerProfileMonitorConfigOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfileMonitorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TrafficManagerProfileMonitorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader">PutCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetCustomHeader">ResetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetExpectedStatusCodeRanges">ResetExpectedStatusCodeRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetToleratedNumberOfFailures">ResetToleratedNumberOfFailures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomHeader` <a name="PutCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader"></a>

```go
func PutCustomHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomHeader` <a name="ResetCustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetCustomHeader"></a>

```go
func ResetCustomHeader()
```

##### `ResetExpectedStatusCodeRanges` <a name="ResetExpectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetExpectedStatusCodeRanges"></a>

```go
func ResetExpectedStatusCodeRanges()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetIntervalInSeconds"></a>

```go
func ResetIntervalInSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

##### `ResetToleratedNumberOfFailures` <a name="ResetToleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.resetToleratedNumberOfFailures"></a>

```go
func ResetToleratedNumberOfFailures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeader">CustomHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList">TrafficManagerProfileMonitorConfigCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeaderInput">CustomHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRangesInput">ExpectedStatusCodeRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailuresInput">ToleratedNumberOfFailuresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges">ExpectedStatusCodeRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures">ToleratedNumberOfFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomHeader`<sup>Required</sup> <a name="CustomHeader" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeader"></a>

```go
func CustomHeader() TrafficManagerProfileMonitorConfigCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigCustomHeaderList">TrafficManagerProfileMonitorConfigCustomHeaderList</a>

---

##### `CustomHeaderInput`<sup>Optional</sup> <a name="CustomHeaderInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.customHeaderInput"></a>

```go
func CustomHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `ExpectedStatusCodeRangesInput`<sup>Optional</sup> <a name="ExpectedStatusCodeRangesInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRangesInput"></a>

```go
func ExpectedStatusCodeRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSecondsInput"></a>

```go
func IntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ToleratedNumberOfFailuresInput`<sup>Optional</sup> <a name="ToleratedNumberOfFailuresInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailuresInput"></a>

```go
func ToleratedNumberOfFailuresInput() *f64
```

- *Type:* *f64

---

##### `ExpectedStatusCodeRanges`<sup>Required</sup> <a name="ExpectedStatusCodeRanges" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.expectedStatusCodeRanges"></a>

```go
func ExpectedStatusCodeRanges() *[]*string
```

- *Type:* *[]*string

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `ToleratedNumberOfFailures`<sup>Required</sup> <a name="ToleratedNumberOfFailures" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.toleratedNumberOfFailures"></a>

```go
func ToleratedNumberOfFailures() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() TrafficManagerProfileMonitorConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileMonitorConfig">TrafficManagerProfileMonitorConfig</a>

---


### TrafficManagerProfileTimeoutsOutputReference <a name="TrafficManagerProfileTimeoutsOutputReference" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/trafficmanagerprofile"

trafficmanagerprofile.NewTrafficManagerProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TrafficManagerProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.trafficManagerProfile.TrafficManagerProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



