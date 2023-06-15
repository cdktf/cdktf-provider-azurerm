# `azurerm_virtual_desktop_scaling_plan`

Refer to the Terraform Registory for docs: [`azurerm_virtual_desktop_scaling_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan).

# `virtualDesktopScalingPlan` Submodule <a name="`virtualDesktopScalingPlan` Submodule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopScalingPlan <a name="VirtualDesktopScalingPlan" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan azurerm_virtual_desktop_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlan(scope Construct, id *string, config VirtualDesktopScalingPlanConfig) VirtualDesktopScalingPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig">VirtualDesktopScalingPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig">VirtualDesktopScalingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool">PutHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag">ResetExclusionTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool">ResetHostPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHostPool` <a name="PutHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool"></a>

```go
func PutHostPool(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putHostPool.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts"></a>

```go
func PutTimeouts(value VirtualDesktopScalingPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExclusionTag` <a name="ResetExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetExclusionTag"></a>

```go
func ResetExclusionTag()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetFriendlyName"></a>

```go
func ResetFriendlyName()
```

##### `ResetHostPool` <a name="ResetHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetHostPool"></a>

```go
func ResetHostPool()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.VirtualDesktopScalingPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.VirtualDesktopScalingPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.VirtualDesktopScalingPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool">HostPool</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput">ExclusionTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput">HostPoolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag">ExclusionTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostPool`<sup>Required</sup> <a name="HostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPool"></a>

```go
func HostPool() VirtualDesktopScalingPlanHostPoolList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList">VirtualDesktopScalingPlanHostPoolList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.schedule"></a>

```go
func Schedule() VirtualDesktopScalingPlanScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList">VirtualDesktopScalingPlanScheduleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeouts"></a>

```go
func Timeouts() VirtualDesktopScalingPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference">VirtualDesktopScalingPlanTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExclusionTagInput`<sup>Optional</sup> <a name="ExclusionTagInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTagInput"></a>

```go
func ExclusionTagInput() *string
```

- *Type:* *string

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyNameInput"></a>

```go
func FriendlyNameInput() *string
```

- *Type:* *string

---

##### `HostPoolInput`<sup>Optional</sup> <a name="HostPoolInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.hostPoolInput"></a>

```go
func HostPoolInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExclusionTag`<sup>Required</sup> <a name="ExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.exclusionTag"></a>

```go
func ExclusionTag() *string
```

- *Type:* *string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.friendlyName"></a>

```go
func FriendlyName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopScalingPlanConfig <a name="VirtualDesktopScalingPlanConfig" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

&virtualdesktopscalingplan.VirtualDesktopScalingPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Schedule: interface{},
	TimeZone: *string,
	Description: *string,
	ExclusionTag: *string,
	FriendlyName: *string,
	HostPool: interface{},
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule">Schedule</a></code> | <code>interface{}</code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag">ExclusionTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName">FriendlyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool">HostPool</a></code> | <code>interface{}</code> | host_pool block. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#location VirtualDesktopScalingPlan#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#resource_group_name VirtualDesktopScalingPlan#resource_group_name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#schedule VirtualDesktopScalingPlan#schedule}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#time_zone VirtualDesktopScalingPlan#time_zone}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#description VirtualDesktopScalingPlan#description}.

---

##### `ExclusionTag`<sup>Optional</sup> <a name="ExclusionTag" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.exclusionTag"></a>

```go
ExclusionTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#exclusion_tag VirtualDesktopScalingPlan#exclusion_tag}.

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.friendlyName"></a>

```go
FriendlyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#friendly_name VirtualDesktopScalingPlan#friendly_name}.

---

##### `HostPool`<sup>Optional</sup> <a name="HostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.hostPool"></a>

```go
HostPool interface{}
```

- *Type:* interface{}

host_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#host_pool VirtualDesktopScalingPlan#host_pool}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#id VirtualDesktopScalingPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#tags VirtualDesktopScalingPlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanConfig.property.timeouts"></a>

```go
Timeouts VirtualDesktopScalingPlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts">VirtualDesktopScalingPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#timeouts VirtualDesktopScalingPlan#timeouts}

---

### VirtualDesktopScalingPlanHostPool <a name="VirtualDesktopScalingPlanHostPool" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

&virtualdesktopscalingplan.VirtualDesktopScalingPlanHostPool {
	HostpoolId: *string,
	ScalingPlanEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId">HostpoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled">ScalingPlanEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}. |

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.hostpoolId"></a>

```go
HostpoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#hostpool_id VirtualDesktopScalingPlan#hostpool_id}.

---

##### `ScalingPlanEnabled`<sup>Required</sup> <a name="ScalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPool.property.scalingPlanEnabled"></a>

```go
ScalingPlanEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#scaling_plan_enabled VirtualDesktopScalingPlan#scaling_plan_enabled}.

---

### VirtualDesktopScalingPlanSchedule <a name="VirtualDesktopScalingPlanSchedule" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

&virtualdesktopscalingplan.VirtualDesktopScalingPlanSchedule {
	DaysOfWeek: *[]*string,
	Name: *string,
	OffPeakLoadBalancingAlgorithm: *string,
	OffPeakStartTime: *string,
	PeakLoadBalancingAlgorithm: *string,
	PeakStartTime: *string,
	RampDownCapacityThresholdPercent: *f64,
	RampDownForceLogoffUsers: interface{},
	RampDownLoadBalancingAlgorithm: *string,
	RampDownMinimumHostsPercent: *f64,
	RampDownNotificationMessage: *string,
	RampDownStartTime: *string,
	RampDownStopHostsWhen: *string,
	RampDownWaitTimeMinutes: *f64,
	RampUpLoadBalancingAlgorithm: *string,
	RampUpStartTime: *string,
	RampUpCapacityThresholdPercent: *f64,
	RampUpMinimumHostsPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm">OffPeakLoadBalancingAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime">OffPeakStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm">PeakLoadBalancingAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime">PeakStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent">RampDownCapacityThresholdPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers">RampDownForceLogoffUsers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm">RampDownLoadBalancingAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent">RampDownMinimumHostsPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage">RampDownNotificationMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime">RampDownStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen">RampDownStopHostsWhen</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes">RampDownWaitTimeMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm">RampUpLoadBalancingAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime">RampUpStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent">RampUpCapacityThresholdPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent">RampUpMinimumHostsPercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}. |

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#days_of_week VirtualDesktopScalingPlan#days_of_week}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#name VirtualDesktopScalingPlan#name}.

---

##### `OffPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="OffPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakLoadBalancingAlgorithm"></a>

```go
OffPeakLoadBalancingAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#off_peak_load_balancing_algorithm VirtualDesktopScalingPlan#off_peak_load_balancing_algorithm}.

---

##### `OffPeakStartTime`<sup>Required</sup> <a name="OffPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.offPeakStartTime"></a>

```go
OffPeakStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#off_peak_start_time VirtualDesktopScalingPlan#off_peak_start_time}.

---

##### `PeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="PeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakLoadBalancingAlgorithm"></a>

```go
PeakLoadBalancingAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#peak_load_balancing_algorithm VirtualDesktopScalingPlan#peak_load_balancing_algorithm}.

---

##### `PeakStartTime`<sup>Required</sup> <a name="PeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.peakStartTime"></a>

```go
PeakStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#peak_start_time VirtualDesktopScalingPlan#peak_start_time}.

---

##### `RampDownCapacityThresholdPercent`<sup>Required</sup> <a name="RampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownCapacityThresholdPercent"></a>

```go
RampDownCapacityThresholdPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_down_capacity_threshold_percent}.

---

##### `RampDownForceLogoffUsers`<sup>Required</sup> <a name="RampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownForceLogoffUsers"></a>

```go
RampDownForceLogoffUsers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_force_logoff_users VirtualDesktopScalingPlan#ramp_down_force_logoff_users}.

---

##### `RampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownLoadBalancingAlgorithm"></a>

```go
RampDownLoadBalancingAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_down_load_balancing_algorithm}.

---

##### `RampDownMinimumHostsPercent`<sup>Required</sup> <a name="RampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownMinimumHostsPercent"></a>

```go
RampDownMinimumHostsPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_down_minimum_hosts_percent}.

---

##### `RampDownNotificationMessage`<sup>Required</sup> <a name="RampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownNotificationMessage"></a>

```go
RampDownNotificationMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_notification_message VirtualDesktopScalingPlan#ramp_down_notification_message}.

---

##### `RampDownStartTime`<sup>Required</sup> <a name="RampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStartTime"></a>

```go
RampDownStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_start_time VirtualDesktopScalingPlan#ramp_down_start_time}.

---

##### `RampDownStopHostsWhen`<sup>Required</sup> <a name="RampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownStopHostsWhen"></a>

```go
RampDownStopHostsWhen *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_stop_hosts_when VirtualDesktopScalingPlan#ramp_down_stop_hosts_when}.

---

##### `RampDownWaitTimeMinutes`<sup>Required</sup> <a name="RampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampDownWaitTimeMinutes"></a>

```go
RampDownWaitTimeMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_down_wait_time_minutes VirtualDesktopScalingPlan#ramp_down_wait_time_minutes}.

---

##### `RampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpLoadBalancingAlgorithm"></a>

```go
RampUpLoadBalancingAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_load_balancing_algorithm VirtualDesktopScalingPlan#ramp_up_load_balancing_algorithm}.

---

##### `RampUpStartTime`<sup>Required</sup> <a name="RampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpStartTime"></a>

```go
RampUpStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_start_time VirtualDesktopScalingPlan#ramp_up_start_time}.

---

##### `RampUpCapacityThresholdPercent`<sup>Optional</sup> <a name="RampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpCapacityThresholdPercent"></a>

```go
RampUpCapacityThresholdPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_capacity_threshold_percent VirtualDesktopScalingPlan#ramp_up_capacity_threshold_percent}.

---

##### `RampUpMinimumHostsPercent`<sup>Optional</sup> <a name="RampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanSchedule.property.rampUpMinimumHostsPercent"></a>

```go
RampUpMinimumHostsPercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#ramp_up_minimum_hosts_percent VirtualDesktopScalingPlan#ramp_up_minimum_hosts_percent}.

---

### VirtualDesktopScalingPlanTimeouts <a name="VirtualDesktopScalingPlanTimeouts" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

&virtualdesktopscalingplan.VirtualDesktopScalingPlanTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#create VirtualDesktopScalingPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#delete VirtualDesktopScalingPlan#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#read VirtualDesktopScalingPlan#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/virtual_desktop_scaling_plan#update VirtualDesktopScalingPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopScalingPlanHostPoolList <a name="VirtualDesktopScalingPlanHostPoolList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlanHostPoolList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualDesktopScalingPlanHostPoolList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get"></a>

```go
func Get(index *f64) VirtualDesktopScalingPlanHostPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualDesktopScalingPlanHostPoolOutputReference <a name="VirtualDesktopScalingPlanHostPoolOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlanHostPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualDesktopScalingPlanHostPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput">HostpoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput">ScalingPlanEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId">HostpoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled">ScalingPlanEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostpoolIdInput`<sup>Optional</sup> <a name="HostpoolIdInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolIdInput"></a>

```go
func HostpoolIdInput() *string
```

- *Type:* *string

---

##### `ScalingPlanEnabledInput`<sup>Optional</sup> <a name="ScalingPlanEnabledInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabledInput"></a>

```go
func ScalingPlanEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostpoolId`<sup>Required</sup> <a name="HostpoolId" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.hostpoolId"></a>

```go
func HostpoolId() *string
```

- *Type:* *string

---

##### `ScalingPlanEnabled`<sup>Required</sup> <a name="ScalingPlanEnabled" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.scalingPlanEnabled"></a>

```go
func ScalingPlanEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanHostPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualDesktopScalingPlanScheduleList <a name="VirtualDesktopScalingPlanScheduleList" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlanScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VirtualDesktopScalingPlanScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get"></a>

```go
func Get(index *f64) VirtualDesktopScalingPlanScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualDesktopScalingPlanScheduleOutputReference <a name="VirtualDesktopScalingPlanScheduleOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlanScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VirtualDesktopScalingPlanScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent">ResetRampUpCapacityThresholdPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent">ResetRampUpMinimumHostsPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRampUpCapacityThresholdPercent` <a name="ResetRampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpCapacityThresholdPercent"></a>

```go
func ResetRampUpCapacityThresholdPercent()
```

##### `ResetRampUpMinimumHostsPercent` <a name="ResetRampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.resetRampUpMinimumHostsPercent"></a>

```go
func ResetRampUpMinimumHostsPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput">OffPeakLoadBalancingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput">OffPeakStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput">PeakLoadBalancingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput">PeakStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput">RampDownCapacityThresholdPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput">RampDownForceLogoffUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput">RampDownLoadBalancingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput">RampDownMinimumHostsPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput">RampDownNotificationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput">RampDownStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput">RampDownStopHostsWhenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput">RampDownWaitTimeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput">RampUpCapacityThresholdPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput">RampUpLoadBalancingAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput">RampUpMinimumHostsPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput">RampUpStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm">OffPeakLoadBalancingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime">OffPeakStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm">PeakLoadBalancingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime">PeakStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent">RampDownCapacityThresholdPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers">RampDownForceLogoffUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm">RampDownLoadBalancingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent">RampDownMinimumHostsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage">RampDownNotificationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime">RampDownStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen">RampDownStopHostsWhen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes">RampDownWaitTimeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent">RampUpCapacityThresholdPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm">RampUpLoadBalancingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent">RampUpMinimumHostsPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime">RampUpStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OffPeakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="OffPeakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithmInput"></a>

```go
func OffPeakLoadBalancingAlgorithmInput() *string
```

- *Type:* *string

---

##### `OffPeakStartTimeInput`<sup>Optional</sup> <a name="OffPeakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTimeInput"></a>

```go
func OffPeakStartTimeInput() *string
```

- *Type:* *string

---

##### `PeakLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="PeakLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithmInput"></a>

```go
func PeakLoadBalancingAlgorithmInput() *string
```

- *Type:* *string

---

##### `PeakStartTimeInput`<sup>Optional</sup> <a name="PeakStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTimeInput"></a>

```go
func PeakStartTimeInput() *string
```

- *Type:* *string

---

##### `RampDownCapacityThresholdPercentInput`<sup>Optional</sup> <a name="RampDownCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercentInput"></a>

```go
func RampDownCapacityThresholdPercentInput() *f64
```

- *Type:* *f64

---

##### `RampDownForceLogoffUsersInput`<sup>Optional</sup> <a name="RampDownForceLogoffUsersInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsersInput"></a>

```go
func RampDownForceLogoffUsersInput() interface{}
```

- *Type:* interface{}

---

##### `RampDownLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="RampDownLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithmInput"></a>

```go
func RampDownLoadBalancingAlgorithmInput() *string
```

- *Type:* *string

---

##### `RampDownMinimumHostsPercentInput`<sup>Optional</sup> <a name="RampDownMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercentInput"></a>

```go
func RampDownMinimumHostsPercentInput() *f64
```

- *Type:* *f64

---

##### `RampDownNotificationMessageInput`<sup>Optional</sup> <a name="RampDownNotificationMessageInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessageInput"></a>

```go
func RampDownNotificationMessageInput() *string
```

- *Type:* *string

---

##### `RampDownStartTimeInput`<sup>Optional</sup> <a name="RampDownStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTimeInput"></a>

```go
func RampDownStartTimeInput() *string
```

- *Type:* *string

---

##### `RampDownStopHostsWhenInput`<sup>Optional</sup> <a name="RampDownStopHostsWhenInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhenInput"></a>

```go
func RampDownStopHostsWhenInput() *string
```

- *Type:* *string

---

##### `RampDownWaitTimeMinutesInput`<sup>Optional</sup> <a name="RampDownWaitTimeMinutesInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutesInput"></a>

```go
func RampDownWaitTimeMinutesInput() *f64
```

- *Type:* *f64

---

##### `RampUpCapacityThresholdPercentInput`<sup>Optional</sup> <a name="RampUpCapacityThresholdPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercentInput"></a>

```go
func RampUpCapacityThresholdPercentInput() *f64
```

- *Type:* *f64

---

##### `RampUpLoadBalancingAlgorithmInput`<sup>Optional</sup> <a name="RampUpLoadBalancingAlgorithmInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithmInput"></a>

```go
func RampUpLoadBalancingAlgorithmInput() *string
```

- *Type:* *string

---

##### `RampUpMinimumHostsPercentInput`<sup>Optional</sup> <a name="RampUpMinimumHostsPercentInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercentInput"></a>

```go
func RampUpMinimumHostsPercentInput() *f64
```

- *Type:* *f64

---

##### `RampUpStartTimeInput`<sup>Optional</sup> <a name="RampUpStartTimeInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTimeInput"></a>

```go
func RampUpStartTimeInput() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OffPeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="OffPeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakLoadBalancingAlgorithm"></a>

```go
func OffPeakLoadBalancingAlgorithm() *string
```

- *Type:* *string

---

##### `OffPeakStartTime`<sup>Required</sup> <a name="OffPeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.offPeakStartTime"></a>

```go
func OffPeakStartTime() *string
```

- *Type:* *string

---

##### `PeakLoadBalancingAlgorithm`<sup>Required</sup> <a name="PeakLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakLoadBalancingAlgorithm"></a>

```go
func PeakLoadBalancingAlgorithm() *string
```

- *Type:* *string

---

##### `PeakStartTime`<sup>Required</sup> <a name="PeakStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.peakStartTime"></a>

```go
func PeakStartTime() *string
```

- *Type:* *string

---

##### `RampDownCapacityThresholdPercent`<sup>Required</sup> <a name="RampDownCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownCapacityThresholdPercent"></a>

```go
func RampDownCapacityThresholdPercent() *f64
```

- *Type:* *f64

---

##### `RampDownForceLogoffUsers`<sup>Required</sup> <a name="RampDownForceLogoffUsers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownForceLogoffUsers"></a>

```go
func RampDownForceLogoffUsers() interface{}
```

- *Type:* interface{}

---

##### `RampDownLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampDownLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownLoadBalancingAlgorithm"></a>

```go
func RampDownLoadBalancingAlgorithm() *string
```

- *Type:* *string

---

##### `RampDownMinimumHostsPercent`<sup>Required</sup> <a name="RampDownMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownMinimumHostsPercent"></a>

```go
func RampDownMinimumHostsPercent() *f64
```

- *Type:* *f64

---

##### `RampDownNotificationMessage`<sup>Required</sup> <a name="RampDownNotificationMessage" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownNotificationMessage"></a>

```go
func RampDownNotificationMessage() *string
```

- *Type:* *string

---

##### `RampDownStartTime`<sup>Required</sup> <a name="RampDownStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStartTime"></a>

```go
func RampDownStartTime() *string
```

- *Type:* *string

---

##### `RampDownStopHostsWhen`<sup>Required</sup> <a name="RampDownStopHostsWhen" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownStopHostsWhen"></a>

```go
func RampDownStopHostsWhen() *string
```

- *Type:* *string

---

##### `RampDownWaitTimeMinutes`<sup>Required</sup> <a name="RampDownWaitTimeMinutes" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampDownWaitTimeMinutes"></a>

```go
func RampDownWaitTimeMinutes() *f64
```

- *Type:* *f64

---

##### `RampUpCapacityThresholdPercent`<sup>Required</sup> <a name="RampUpCapacityThresholdPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpCapacityThresholdPercent"></a>

```go
func RampUpCapacityThresholdPercent() *f64
```

- *Type:* *f64

---

##### `RampUpLoadBalancingAlgorithm`<sup>Required</sup> <a name="RampUpLoadBalancingAlgorithm" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpLoadBalancingAlgorithm"></a>

```go
func RampUpLoadBalancingAlgorithm() *string
```

- *Type:* *string

---

##### `RampUpMinimumHostsPercent`<sup>Required</sup> <a name="RampUpMinimumHostsPercent" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpMinimumHostsPercent"></a>

```go
func RampUpMinimumHostsPercent() *f64
```

- *Type:* *f64

---

##### `RampUpStartTime`<sup>Required</sup> <a name="RampUpStartTime" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.rampUpStartTime"></a>

```go
func RampUpStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VirtualDesktopScalingPlanTimeoutsOutputReference <a name="VirtualDesktopScalingPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/virtualdesktopscalingplan"

virtualdesktopscalingplan.NewVirtualDesktopScalingPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VirtualDesktopScalingPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualDesktopScalingPlan.VirtualDesktopScalingPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



