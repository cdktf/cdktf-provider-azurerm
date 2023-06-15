# `azurerm_lab_service_plan`

Refer to the Terraform Registory for docs: [`azurerm_lab_service_plan`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan).

# `labServicePlan` Submodule <a name="`labServicePlan` Submodule" id="@cdktf/provider-azurerm.labServicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServicePlan <a name="LabServicePlan" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan azurerm_lab_service_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.NewLabServicePlan(scope Construct, id *string, config LabServicePlanConfig) LabServicePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig">LabServicePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown">PutDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection">PutDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport">PutSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown">ResetDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection">ResetDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId">ResetDefaultNetworkSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId">ResetSharedGalleryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport">ResetSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDefaultAutoShutdown` <a name="PutDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown"></a>

```go
func PutDefaultAutoShutdown(value LabServicePlanDefaultAutoShutdown)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `PutDefaultConnection` <a name="PutDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection"></a>

```go
func PutDefaultConnection(value LabServicePlanDefaultConnection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putDefaultConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `PutSupport` <a name="PutSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport"></a>

```go
func PutSupport(value LabServicePlanSupport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putSupport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts"></a>

```go
func PutTimeouts(value LabServicePlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

---

##### `ResetDefaultAutoShutdown` <a name="ResetDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultAutoShutdown"></a>

```go
func ResetDefaultAutoShutdown()
```

##### `ResetDefaultConnection` <a name="ResetDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultConnection"></a>

```go
func ResetDefaultConnection()
```

##### `ResetDefaultNetworkSubnetId` <a name="ResetDefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetDefaultNetworkSubnetId"></a>

```go
func ResetDefaultNetworkSubnetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetId"></a>

```go
func ResetId()
```

##### `ResetSharedGalleryId` <a name="ResetSharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSharedGalleryId"></a>

```go
func ResetSharedGalleryId()
```

##### `ResetSupport` <a name="ResetSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetSupport"></a>

```go
func ResetSupport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.LabServicePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.LabServicePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.LabServicePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown">DefaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection">DefaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput">AllowedRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput">DefaultAutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput">DefaultConnectionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput">DefaultNetworkSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput">SharedGalleryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput">SupportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions">AllowedRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId">DefaultNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId">SharedGalleryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAutoShutdown`<sup>Required</sup> <a name="DefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdown"></a>

```go
func DefaultAutoShutdown() LabServicePlanDefaultAutoShutdownOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference">LabServicePlanDefaultAutoShutdownOutputReference</a>

---

##### `DefaultConnection`<sup>Required</sup> <a name="DefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnection"></a>

```go
func DefaultConnection() LabServicePlanDefaultConnectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference">LabServicePlanDefaultConnectionOutputReference</a>

---

##### `Support`<sup>Required</sup> <a name="Support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.support"></a>

```go
func Support() LabServicePlanSupportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference">LabServicePlanSupportOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeouts"></a>

```go
func Timeouts() LabServicePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference">LabServicePlanTimeoutsOutputReference</a>

---

##### `AllowedRegionsInput`<sup>Optional</sup> <a name="AllowedRegionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegionsInput"></a>

```go
func AllowedRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAutoShutdownInput`<sup>Optional</sup> <a name="DefaultAutoShutdownInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultAutoShutdownInput"></a>

```go
func DefaultAutoShutdownInput() LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---

##### `DefaultConnectionInput`<sup>Optional</sup> <a name="DefaultConnectionInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultConnectionInput"></a>

```go
func DefaultConnectionInput() LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---

##### `DefaultNetworkSubnetIdInput`<sup>Optional</sup> <a name="DefaultNetworkSubnetIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetIdInput"></a>

```go
func DefaultNetworkSubnetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SharedGalleryIdInput`<sup>Optional</sup> <a name="SharedGalleryIdInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryIdInput"></a>

```go
func SharedGalleryIdInput() *string
```

- *Type:* *string

---

##### `SupportInput`<sup>Optional</sup> <a name="SupportInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.supportInput"></a>

```go
func SupportInput() LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.allowedRegions"></a>

```go
func AllowedRegions() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultNetworkSubnetId`<sup>Required</sup> <a name="DefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.defaultNetworkSubnetId"></a>

```go
func DefaultNetworkSubnetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SharedGalleryId`<sup>Required</sup> <a name="SharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.sharedGalleryId"></a>

```go
func SharedGalleryId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServicePlanConfig <a name="LabServicePlanConfig" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

&labserviceplan.LabServicePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedRegions: *[]*string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	DefaultAutoShutdown: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown,
	DefaultConnection: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServicePlan.LabServicePlanDefaultConnection,
	DefaultNetworkSubnetId: *string,
	Id: *string,
	SharedGalleryId: *string,
	Support: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServicePlan.LabServicePlanSupport,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.labServicePlan.LabServicePlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions">AllowedRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#location LabServicePlan#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#name LabServicePlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown">DefaultAutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | default_auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection">DefaultConnection</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | default_connection block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId">DefaultNetworkSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#id LabServicePlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId">SharedGalleryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support">Support</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | support block. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.allowedRegions"></a>

```go
AllowedRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#allowed_regions LabServicePlan#allowed_regions}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#location LabServicePlan#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#name LabServicePlan#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#resource_group_name LabServicePlan#resource_group_name}.

---

##### `DefaultAutoShutdown`<sup>Optional</sup> <a name="DefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultAutoShutdown"></a>

```go
DefaultAutoShutdown LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

default_auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#default_auto_shutdown LabServicePlan#default_auto_shutdown}

---

##### `DefaultConnection`<sup>Optional</sup> <a name="DefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultConnection"></a>

```go
DefaultConnection LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

default_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#default_connection LabServicePlan#default_connection}

---

##### `DefaultNetworkSubnetId`<sup>Optional</sup> <a name="DefaultNetworkSubnetId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.defaultNetworkSubnetId"></a>

```go
DefaultNetworkSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#default_network_subnet_id LabServicePlan#default_network_subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#id LabServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SharedGalleryId`<sup>Optional</sup> <a name="SharedGalleryId" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.sharedGalleryId"></a>

```go
SharedGalleryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#shared_gallery_id LabServicePlan#shared_gallery_id}.

---

##### `Support`<sup>Optional</sup> <a name="Support" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.support"></a>

```go
Support LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

support block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#support LabServicePlan#support}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#tags LabServicePlan#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanConfig.property.timeouts"></a>

```go
Timeouts LabServicePlanTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts">LabServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#timeouts LabServicePlan#timeouts}

---

### LabServicePlanDefaultAutoShutdown <a name="LabServicePlanDefaultAutoShutdown" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

&labserviceplan.LabServicePlanDefaultAutoShutdown {
	DisconnectDelay: *string,
	IdleDelay: *string,
	NoConnectDelay: *string,
	ShutdownOnIdle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay">DisconnectDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay">IdleDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay">NoConnectDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}. |

---

##### `DisconnectDelay`<sup>Optional</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.disconnectDelay"></a>

```go
DisconnectDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#disconnect_delay LabServicePlan#disconnect_delay}.

---

##### `IdleDelay`<sup>Optional</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.idleDelay"></a>

```go
IdleDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#idle_delay LabServicePlan#idle_delay}.

---

##### `NoConnectDelay`<sup>Optional</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.noConnectDelay"></a>

```go
NoConnectDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#no_connect_delay LabServicePlan#no_connect_delay}.

---

##### `ShutdownOnIdle`<sup>Optional</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown.property.shutdownOnIdle"></a>

```go
ShutdownOnIdle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#shutdown_on_idle LabServicePlan#shutdown_on_idle}.

---

### LabServicePlanDefaultConnection <a name="LabServicePlanDefaultConnection" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

&labserviceplan.LabServicePlanDefaultConnection {
	ClientRdpAccess: *string,
	ClientSshAccess: *string,
	WebRdpAccess: *string,
	WebSshAccess: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess">ClientSshAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess">WebRdpAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess">WebSshAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}. |

---

##### `ClientRdpAccess`<sup>Optional</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientRdpAccess"></a>

```go
ClientRdpAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#client_rdp_access LabServicePlan#client_rdp_access}.

---

##### `ClientSshAccess`<sup>Optional</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.clientSshAccess"></a>

```go
ClientSshAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#client_ssh_access LabServicePlan#client_ssh_access}.

---

##### `WebRdpAccess`<sup>Optional</sup> <a name="WebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webRdpAccess"></a>

```go
WebRdpAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#web_rdp_access LabServicePlan#web_rdp_access}.

---

##### `WebSshAccess`<sup>Optional</sup> <a name="WebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection.property.webSshAccess"></a>

```go
WebSshAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#web_ssh_access LabServicePlan#web_ssh_access}.

---

### LabServicePlanSupport <a name="LabServicePlanSupport" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

&labserviceplan.LabServicePlanSupport {
	Email: *string,
	Instructions: *string,
	Phone: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#email LabServicePlan#email}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions">Instructions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#url LabServicePlan#url}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#email LabServicePlan#email}.

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.instructions"></a>

```go
Instructions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#instructions LabServicePlan#instructions}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#phone LabServicePlan#phone}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#url LabServicePlan#url}.

---

### LabServicePlanTimeouts <a name="LabServicePlanTimeouts" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

&labserviceplan.LabServicePlanTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#create LabServicePlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#read LabServicePlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#update LabServicePlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#create LabServicePlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#delete LabServicePlan#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#read LabServicePlan#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/lab_service_plan#update LabServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServicePlanDefaultAutoShutdownOutputReference <a name="LabServicePlanDefaultAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.NewLabServicePlanDefaultAutoShutdownOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServicePlanDefaultAutoShutdownOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay">ResetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay">ResetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay">ResetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle">ResetShutdownOnIdle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectDelay` <a name="ResetDisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetDisconnectDelay"></a>

```go
func ResetDisconnectDelay()
```

##### `ResetIdleDelay` <a name="ResetIdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetIdleDelay"></a>

```go
func ResetIdleDelay()
```

##### `ResetNoConnectDelay` <a name="ResetNoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetNoConnectDelay"></a>

```go
func ResetNoConnectDelay()
```

##### `ResetShutdownOnIdle` <a name="ResetShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```go
func ResetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput">DisconnectDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput">IdleDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput">NoConnectDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput">ShutdownOnIdleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay">DisconnectDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay">IdleDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay">NoConnectDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisconnectDelayInput`<sup>Optional</sup> <a name="DisconnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```go
func DisconnectDelayInput() *string
```

- *Type:* *string

---

##### `IdleDelayInput`<sup>Optional</sup> <a name="IdleDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelayInput"></a>

```go
func IdleDelayInput() *string
```

- *Type:* *string

---

##### `NoConnectDelayInput`<sup>Optional</sup> <a name="NoConnectDelayInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```go
func NoConnectDelayInput() *string
```

- *Type:* *string

---

##### `ShutdownOnIdleInput`<sup>Optional</sup> <a name="ShutdownOnIdleInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```go
func ShutdownOnIdleInput() *string
```

- *Type:* *string

---

##### `DisconnectDelay`<sup>Required</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.disconnectDelay"></a>

```go
func DisconnectDelay() *string
```

- *Type:* *string

---

##### `IdleDelay`<sup>Required</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.idleDelay"></a>

```go
func IdleDelay() *string
```

- *Type:* *string

---

##### `NoConnectDelay`<sup>Required</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.noConnectDelay"></a>

```go
func NoConnectDelay() *string
```

- *Type:* *string

---

##### `ShutdownOnIdle`<sup>Required</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```go
func ShutdownOnIdle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdownOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServicePlanDefaultAutoShutdown
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultAutoShutdown">LabServicePlanDefaultAutoShutdown</a>

---


### LabServicePlanDefaultConnectionOutputReference <a name="LabServicePlanDefaultConnectionOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.NewLabServicePlanDefaultConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServicePlanDefaultConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess">ResetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess">ResetClientSshAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess">ResetWebRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess">ResetWebSshAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientRdpAccess` <a name="ResetClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientRdpAccess"></a>

```go
func ResetClientRdpAccess()
```

##### `ResetClientSshAccess` <a name="ResetClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetClientSshAccess"></a>

```go
func ResetClientSshAccess()
```

##### `ResetWebRdpAccess` <a name="ResetWebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebRdpAccess"></a>

```go
func ResetWebRdpAccess()
```

##### `ResetWebSshAccess` <a name="ResetWebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.resetWebSshAccess"></a>

```go
func ResetWebSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput">ClientRdpAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput">ClientSshAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput">WebRdpAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput">WebSshAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess">ClientSshAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess">WebRdpAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess">WebSshAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientRdpAccessInput`<sup>Optional</sup> <a name="ClientRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccessInput"></a>

```go
func ClientRdpAccessInput() *string
```

- *Type:* *string

---

##### `ClientSshAccessInput`<sup>Optional</sup> <a name="ClientSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccessInput"></a>

```go
func ClientSshAccessInput() *string
```

- *Type:* *string

---

##### `WebRdpAccessInput`<sup>Optional</sup> <a name="WebRdpAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccessInput"></a>

```go
func WebRdpAccessInput() *string
```

- *Type:* *string

---

##### `WebSshAccessInput`<sup>Optional</sup> <a name="WebSshAccessInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccessInput"></a>

```go
func WebSshAccessInput() *string
```

- *Type:* *string

---

##### `ClientRdpAccess`<sup>Required</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientRdpAccess"></a>

```go
func ClientRdpAccess() *string
```

- *Type:* *string

---

##### `ClientSshAccess`<sup>Required</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.clientSshAccess"></a>

```go
func ClientSshAccess() *string
```

- *Type:* *string

---

##### `WebRdpAccess`<sup>Required</sup> <a name="WebRdpAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webRdpAccess"></a>

```go
func WebRdpAccess() *string
```

- *Type:* *string

---

##### `WebSshAccess`<sup>Required</sup> <a name="WebSshAccess" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.webSshAccess"></a>

```go
func WebSshAccess() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServicePlanDefaultConnection
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanDefaultConnection">LabServicePlanDefaultConnection</a>

---


### LabServicePlanSupportOutputReference <a name="LabServicePlanSupportOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.NewLabServicePlanSupportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServicePlanSupportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone">ResetPhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetInstructions"></a>

```go
func ResetInstructions()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetPhone"></a>

```go
func ResetPhone()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructionsInput"></a>

```go
func InstructionsInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupportOutputReference.property.internalValue"></a>

```go
func InternalValue() LabServicePlanSupport
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanSupport">LabServicePlanSupport</a>

---


### LabServicePlanTimeoutsOutputReference <a name="LabServicePlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/labserviceplan"

labserviceplan.NewLabServicePlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LabServicePlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServicePlan.LabServicePlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



