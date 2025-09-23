# `privateLinkService` Submodule <a name="`privateLinkService` Submodule" id="@cdktf/provider-azurerm.privateLinkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateLinkService <a name="PrivateLinkService" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service azurerm_private_link_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.NewPrivateLinkService(scope Construct, id *string, config PrivateLinkServiceConfig) PrivateLinkService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig">PrivateLinkServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig">PrivateLinkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration">PutNatIpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetAutoApprovalSubscriptionIds">ResetAutoApprovalSubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetDestinationIpAddress">ResetDestinationIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetEnableProxyProtocol">ResetEnableProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetFqdns">ResetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetLoadBalancerFrontendIpConfigurationIds">ResetLoadBalancerFrontendIpConfigurationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetVisibilitySubscriptionIds">ResetVisibilitySubscriptionIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNatIpConfiguration` <a name="PutNatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration"></a>

```go
func PutNatIpConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putNatIpConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts"></a>

```go
func PutTimeouts(value PrivateLinkServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

---

##### `ResetAutoApprovalSubscriptionIds` <a name="ResetAutoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetAutoApprovalSubscriptionIds"></a>

```go
func ResetAutoApprovalSubscriptionIds()
```

##### `ResetDestinationIpAddress` <a name="ResetDestinationIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetDestinationIpAddress"></a>

```go
func ResetDestinationIpAddress()
```

##### `ResetEnableProxyProtocol` <a name="ResetEnableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetEnableProxyProtocol"></a>

```go
func ResetEnableProxyProtocol()
```

##### `ResetFqdns` <a name="ResetFqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetFqdns"></a>

```go
func ResetFqdns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerFrontendIpConfigurationIds` <a name="ResetLoadBalancerFrontendIpConfigurationIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetLoadBalancerFrontendIpConfigurationIds"></a>

```go
func ResetLoadBalancerFrontendIpConfigurationIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVisibilitySubscriptionIds` <a name="ResetVisibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.resetVisibilitySubscriptionIds"></a>

```go
func ResetVisibilitySubscriptionIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateLinkService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.PrivateLinkService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.PrivateLinkService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.PrivateLinkService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.PrivateLinkService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivateLinkService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivateLinkService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivateLinkService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivateLinkService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfiguration">NatIpConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList">PrivateLinkServiceNatIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference">PrivateLinkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIdsInput">AutoApprovalSubscriptionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.destinationIpAddressInput">DestinationIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocolInput">EnableProxyProtocolInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdnsInput">FqdnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIdsInput">LoadBalancerFrontendIpConfigurationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfigurationInput">NatIpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIdsInput">VisibilitySubscriptionIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIds">AutoApprovalSubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.destinationIpAddress">DestinationIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdns">Fqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIds">LoadBalancerFrontendIpConfigurationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIds">VisibilitySubscriptionIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `NatIpConfiguration`<sup>Required</sup> <a name="NatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfiguration"></a>

```go
func NatIpConfiguration() PrivateLinkServiceNatIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList">PrivateLinkServiceNatIpConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeouts"></a>

```go
func Timeouts() PrivateLinkServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference">PrivateLinkServiceTimeoutsOutputReference</a>

---

##### `AutoApprovalSubscriptionIdsInput`<sup>Optional</sup> <a name="AutoApprovalSubscriptionIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIdsInput"></a>

```go
func AutoApprovalSubscriptionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIpAddressInput`<sup>Optional</sup> <a name="DestinationIpAddressInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.destinationIpAddressInput"></a>

```go
func DestinationIpAddressInput() *string
```

- *Type:* *string

---

##### `EnableProxyProtocolInput`<sup>Optional</sup> <a name="EnableProxyProtocolInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocolInput"></a>

```go
func EnableProxyProtocolInput() interface{}
```

- *Type:* interface{}

---

##### `FqdnsInput`<sup>Optional</sup> <a name="FqdnsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdnsInput"></a>

```go
func FqdnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerFrontendIpConfigurationIdsInput`<sup>Optional</sup> <a name="LoadBalancerFrontendIpConfigurationIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIdsInput"></a>

```go
func LoadBalancerFrontendIpConfigurationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatIpConfigurationInput`<sup>Optional</sup> <a name="NatIpConfigurationInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.natIpConfigurationInput"></a>

```go
func NatIpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilitySubscriptionIdsInput`<sup>Optional</sup> <a name="VisibilitySubscriptionIdsInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIdsInput"></a>

```go
func VisibilitySubscriptionIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoApprovalSubscriptionIds`<sup>Required</sup> <a name="AutoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.autoApprovalSubscriptionIds"></a>

```go
func AutoApprovalSubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationIpAddress`<sup>Required</sup> <a name="DestinationIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.destinationIpAddress"></a>

```go
func DestinationIpAddress() *string
```

- *Type:* *string

---

##### `EnableProxyProtocol`<sup>Required</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.enableProxyProtocol"></a>

```go
func EnableProxyProtocol() interface{}
```

- *Type:* interface{}

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.fqdns"></a>

```go
func Fqdns() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerFrontendIpConfigurationIds`<sup>Required</sup> <a name="LoadBalancerFrontendIpConfigurationIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.loadBalancerFrontendIpConfigurationIds"></a>

```go
func LoadBalancerFrontendIpConfigurationIds() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VisibilitySubscriptionIds`<sup>Required</sup> <a name="VisibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.visibilitySubscriptionIds"></a>

```go
func VisibilitySubscriptionIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateLinkServiceConfig <a name="PrivateLinkServiceConfig" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

&privatelinkservice.PrivateLinkServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NatIpConfiguration: interface{},
	ResourceGroupName: *string,
	AutoApprovalSubscriptionIds: *[]*string,
	DestinationIpAddress: *string,
	EnableProxyProtocol: interface{},
	Fqdns: *[]*string,
	Id: *string,
	LoadBalancerFrontendIpConfigurationIds: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.privateLinkService.PrivateLinkServiceTimeouts,
	VisibilitySubscriptionIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#location PrivateLinkService#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#name PrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.natIpConfiguration">NatIpConfiguration</a></code> | <code>interface{}</code> | nat_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#resource_group_name PrivateLinkService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.autoApprovalSubscriptionIds">AutoApprovalSubscriptionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.destinationIpAddress">DestinationIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#destination_ip_address PrivateLinkService#destination_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.enableProxyProtocol">EnableProxyProtocol</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.fqdns">Fqdns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#fqdns PrivateLinkService#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#id PrivateLinkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.loadBalancerFrontendIpConfigurationIds">LoadBalancerFrontendIpConfigurationIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#tags PrivateLinkService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.visibilitySubscriptionIds">VisibilitySubscriptionIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#location PrivateLinkService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#name PrivateLinkService#name}.

---

##### `NatIpConfiguration`<sup>Required</sup> <a name="NatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.natIpConfiguration"></a>

```go
NatIpConfiguration interface{}
```

- *Type:* interface{}

nat_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#nat_ip_configuration PrivateLinkService#nat_ip_configuration}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#resource_group_name PrivateLinkService#resource_group_name}.

---

##### `AutoApprovalSubscriptionIds`<sup>Optional</sup> <a name="AutoApprovalSubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.autoApprovalSubscriptionIds"></a>

```go
AutoApprovalSubscriptionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#auto_approval_subscription_ids PrivateLinkService#auto_approval_subscription_ids}.

---

##### `DestinationIpAddress`<sup>Optional</sup> <a name="DestinationIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.destinationIpAddress"></a>

```go
DestinationIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#destination_ip_address PrivateLinkService#destination_ip_address}.

---

##### `EnableProxyProtocol`<sup>Optional</sup> <a name="EnableProxyProtocol" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.enableProxyProtocol"></a>

```go
EnableProxyProtocol interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#enable_proxy_protocol PrivateLinkService#enable_proxy_protocol}.

---

##### `Fqdns`<sup>Optional</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.fqdns"></a>

```go
Fqdns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#fqdns PrivateLinkService#fqdns}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#id PrivateLinkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerFrontendIpConfigurationIds`<sup>Optional</sup> <a name="LoadBalancerFrontendIpConfigurationIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.loadBalancerFrontendIpConfigurationIds"></a>

```go
LoadBalancerFrontendIpConfigurationIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#load_balancer_frontend_ip_configuration_ids PrivateLinkService#load_balancer_frontend_ip_configuration_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#tags PrivateLinkService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.timeouts"></a>

```go
Timeouts PrivateLinkServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts">PrivateLinkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#timeouts PrivateLinkService#timeouts}

---

##### `VisibilitySubscriptionIds`<sup>Optional</sup> <a name="VisibilitySubscriptionIds" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceConfig.property.visibilitySubscriptionIds"></a>

```go
VisibilitySubscriptionIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#visibility_subscription_ids PrivateLinkService#visibility_subscription_ids}.

---

### PrivateLinkServiceNatIpConfiguration <a name="PrivateLinkServiceNatIpConfiguration" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

&privatelinkservice.PrivateLinkServiceNatIpConfiguration {
	Name: *string,
	Primary: interface{},
	SubnetId: *string,
	PrivateIpAddress: *string,
	PrivateIpAddressVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#name PrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#primary PrivateLinkService#primary}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#subnet_id PrivateLinkService#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#private_ip_address PrivateLinkService#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#private_ip_address_version PrivateLinkService#private_ip_address_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#name PrivateLinkService#name}.

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#primary PrivateLinkService#primary}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#subnet_id PrivateLinkService#subnet_id}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddress"></a>

```go
PrivateIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#private_ip_address PrivateLinkService#private_ip_address}.

---

##### `PrivateIpAddressVersion`<sup>Optional</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfiguration.property.privateIpAddressVersion"></a>

```go
PrivateIpAddressVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#private_ip_address_version PrivateLinkService#private_ip_address_version}.

---

### PrivateLinkServiceTimeouts <a name="PrivateLinkServiceTimeouts" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

&privatelinkservice.PrivateLinkServiceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#create PrivateLinkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#delete PrivateLinkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#read PrivateLinkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#update PrivateLinkService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#create PrivateLinkService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#delete PrivateLinkService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#read PrivateLinkService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_link_service#update PrivateLinkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateLinkServiceNatIpConfigurationList <a name="PrivateLinkServiceNatIpConfigurationList" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.NewPrivateLinkServiceNatIpConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivateLinkServiceNatIpConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get"></a>

```go
func Get(index *f64) PrivateLinkServiceNatIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateLinkServiceNatIpConfigurationOutputReference <a name="PrivateLinkServiceNatIpConfigurationOutputReference" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.NewPrivateLinkServiceNatIpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivateLinkServiceNatIpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddressVersion">ResetPrivateIpAddressVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```go
func ResetPrivateIpAddress()
```

##### `ResetPrivateIpAddressVersion` <a name="ResetPrivateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.resetPrivateIpAddressVersion"></a>

```go
func ResetPrivateIpAddressVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersionInput">PrivateIpAddressVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersion">PrivateIpAddressVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```go
func PrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddressVersionInput`<sup>Optional</sup> <a name="PrivateIpAddressVersionInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersionInput"></a>

```go
func PrivateIpAddressVersionInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAddressVersion`<sup>Required</sup> <a name="PrivateIpAddressVersion" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```go
func PrivateIpAddressVersion() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceNatIpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivateLinkServiceTimeoutsOutputReference <a name="PrivateLinkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/privatelinkservice"

privatelinkservice.NewPrivateLinkServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateLinkServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateLinkService.PrivateLinkServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



