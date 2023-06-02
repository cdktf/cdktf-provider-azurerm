# `azurerm_api_management_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_api_management_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain).

# `apiManagementCustomDomain` Submodule <a name="`apiManagementCustomDomain` Submodule" id="@cdktf/provider-azurerm.apiManagementCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementCustomDomain <a name="ApiManagementCustomDomain" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain azurerm_api_management_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomain(scope Construct, id *string, config ApiManagementCustomDomainConfig) ApiManagementCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig">ApiManagementCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig">ApiManagementCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal">PutDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway">PutGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement">PutManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal">PutPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm">PutScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal">ResetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement">ResetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal">ResetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm">ResetScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDeveloperPortal` <a name="PutDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal"></a>

```go
func PutDeveloperPortal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGateway` <a name="PutGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway"></a>

```go
func PutGateway(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManagement` <a name="PutManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement"></a>

```go
func PutManagement(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortal` <a name="PutPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal"></a>

```go
func PutPortal(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScm` <a name="PutScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm"></a>

```go
func PutScm(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementCustomDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---

##### `ResetDeveloperPortal` <a name="ResetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal"></a>

```go
func ResetDeveloperPortal()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway"></a>

```go
func ResetGateway()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetManagement` <a name="ResetManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement"></a>

```go
func ResetManagement()
```

##### `ResetPortal` <a name="ResetPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal"></a>

```go
func ResetPortal()
```

##### `ResetScm` <a name="ResetScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm"></a>

```go
func ResetScm()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.ApiManagementCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.ApiManagementCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.ApiManagementCustomDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal">DeveloperPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management">Management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal">Portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm">Scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput">DeveloperPortalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput">GatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput">ManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput">PortalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput">ScmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeveloperPortal`<sup>Required</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal"></a>

```go
func DeveloperPortal() ApiManagementCustomDomainDeveloperPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a>

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway"></a>

```go
func Gateway() ApiManagementCustomDomainGatewayList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a>

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management"></a>

```go
func Management() ApiManagementCustomDomainManagementList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a>

---

##### `Portal`<sup>Required</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal"></a>

```go
func Portal() ApiManagementCustomDomainPortalList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a>

---

##### `Scm`<sup>Required</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm"></a>

```go
func Scm() ApiManagementCustomDomainScmList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts"></a>

```go
func Timeouts() ApiManagementCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput"></a>

```go
func ApiManagementIdInput() *string
```

- *Type:* *string

---

##### `DeveloperPortalInput`<sup>Optional</sup> <a name="DeveloperPortalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput"></a>

```go
func DeveloperPortalInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput"></a>

```go
func GatewayInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementInput`<sup>Optional</sup> <a name="ManagementInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput"></a>

```go
func ManagementInput() interface{}
```

- *Type:* interface{}

---

##### `PortalInput`<sup>Optional</sup> <a name="PortalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput"></a>

```go
func PortalInput() interface{}
```

- *Type:* interface{}

---

##### `ScmInput`<sup>Optional</sup> <a name="ScmInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput"></a>

```go
func ScmInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId"></a>

```go
func ApiManagementId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementCustomDomainConfig <a name="ApiManagementCustomDomainConfig" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiManagementId: *string,
	DeveloperPortal: interface{},
	Gateway: interface{},
	Id: *string,
	Management: interface{},
	Portal: interface{},
	Scm: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId">ApiManagementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal">DeveloperPortal</a></code> | <code>interface{}</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway">Gateway</a></code> | <code>interface{}</code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management">Management</a></code> | <code>interface{}</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal">Portal</a></code> | <code>interface{}</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm">Scm</a></code> | <code>interface{}</code> | scm block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId"></a>

```go
ApiManagementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}.

---

##### `DeveloperPortal`<sup>Optional</sup> <a name="DeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal"></a>

```go
DeveloperPortal interface{}
```

- *Type:* interface{}

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#developer_portal ApiManagementCustomDomain#developer_portal}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway"></a>

```go
Gateway interface{}
```

- *Type:* interface{}

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#gateway ApiManagementCustomDomain#gateway}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Management`<sup>Optional</sup> <a name="Management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management"></a>

```go
Management interface{}
```

- *Type:* interface{}

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#management ApiManagementCustomDomain#management}

---

##### `Portal`<sup>Optional</sup> <a name="Portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal"></a>

```go
Portal interface{}
```

- *Type:* interface{}

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#portal ApiManagementCustomDomain#portal}

---

##### `Scm`<sup>Optional</sup> <a name="Scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm"></a>

```go
Scm interface{}
```

- *Type:* interface{}

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#scm ApiManagementCustomDomain#scm}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts"></a>

```go
Timeouts ApiManagementCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#timeouts ApiManagementCustomDomain#timeouts}

---

### ApiManagementCustomDomainDeveloperPortal <a name="ApiManagementCustomDomainDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainDeveloperPortal {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainGateway <a name="ApiManagementCustomDomainGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainGateway {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	DefaultSslBinding: interface{},
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `DefaultSslBinding`<sup>Optional</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding"></a>

```go
DefaultSslBinding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainManagement <a name="ApiManagementCustomDomainManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainManagement {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainPortal <a name="ApiManagementCustomDomainPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainPortal {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainScm <a name="ApiManagementCustomDomainScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainScm {
	HostName: *string,
	Certificate: *string,
	CertificatePassword: *string,
	KeyVaultId: *string,
	NegotiateClientCertificate: interface{},
	SslKeyvaultIdentityClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName">HostName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate">Certificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `CertificatePassword`<sup>Optional</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId"></a>

```go
KeyVaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `NegotiateClientCertificate`<sup>Optional</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate"></a>

```go
NegotiateClientCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `SslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId"></a>

```go
SslKeyvaultIdentityClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainTimeouts <a name="ApiManagementCustomDomainTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

&apimanagementcustomdomain.ApiManagementCustomDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementCustomDomainDeveloperPortalList <a name="ApiManagementCustomDomainDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainDeveloperPortalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCustomDomainDeveloperPortalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get"></a>

```go
func Get(index *f64) ApiManagementCustomDomainDeveloperPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainDeveloperPortalOutputReference <a name="ApiManagementCustomDomainDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainDeveloperPortalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCustomDomainDeveloperPortalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainGatewayList <a name="ApiManagementCustomDomainGatewayList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainGatewayList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCustomDomainGatewayList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get"></a>

```go
func Get(index *f64) ApiManagementCustomDomainGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainGatewayOutputReference <a name="ApiManagementCustomDomainGatewayOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCustomDomainGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding">ResetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetDefaultSslBinding` <a name="ResetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding"></a>

```go
func ResetDefaultSslBinding()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput">DefaultSslBindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding">DefaultSslBinding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `DefaultSslBindingInput`<sup>Optional</sup> <a name="DefaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput"></a>

```go
func DefaultSslBindingInput() interface{}
```

- *Type:* interface{}

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `DefaultSslBinding`<sup>Required</sup> <a name="DefaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding"></a>

```go
func DefaultSslBinding() interface{}
```

- *Type:* interface{}

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainManagementList <a name="ApiManagementCustomDomainManagementList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainManagementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCustomDomainManagementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get"></a>

```go
func Get(index *f64) ApiManagementCustomDomainManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainManagementOutputReference <a name="ApiManagementCustomDomainManagementOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCustomDomainManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainPortalList <a name="ApiManagementCustomDomainPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainPortalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCustomDomainPortalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get"></a>

```go
func Get(index *f64) ApiManagementCustomDomainPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainPortalOutputReference <a name="ApiManagementCustomDomainPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainPortalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCustomDomainPortalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainScmList <a name="ApiManagementCustomDomainScmList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainScmList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiManagementCustomDomainScmList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get"></a>

```go
func Get(index *f64) ApiManagementCustomDomainScmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainScmOutputReference <a name="ApiManagementCustomDomainScmOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainScmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiManagementCustomDomainScmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword">ResetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate">ResetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId">ResetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetCertificatePassword` <a name="ResetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword"></a>

```go
func ResetCertificatePassword()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId"></a>

```go
func ResetKeyVaultId()
```

##### `ResetNegotiateClientCertificate` <a name="ResetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate"></a>

```go
func ResetNegotiateClientCertificate()
```

##### `ResetSslKeyvaultIdentityClientId` <a name="ResetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```go
func ResetSslKeyvaultIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource">CertificateSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus">CertificateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry">Expiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput">NegotiateClientCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput">SslKeyvaultIdentityClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate">NegotiateClientCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId">SslKeyvaultIdentityClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateSource`<sup>Required</sup> <a name="CertificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource"></a>

```go
func CertificateSource() *string
```

- *Type:* *string

---

##### `CertificateStatus`<sup>Required</sup> <a name="CertificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus"></a>

```go
func CertificateStatus() *string
```

- *Type:* *string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry"></a>

```go
func Expiry() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput"></a>

```go
func KeyVaultIdInput() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificateInput`<sup>Optional</sup> <a name="NegotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput"></a>

```go
func NegotiateClientCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="SslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```go
func SslKeyvaultIdentityClientIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `NegotiateClientCertificate`<sup>Required</sup> <a name="NegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate"></a>

```go
func NegotiateClientCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslKeyvaultIdentityClientId`<sup>Required</sup> <a name="SslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```go
func SslKeyvaultIdentityClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApiManagementCustomDomainTimeoutsOutputReference <a name="ApiManagementCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/apimanagementcustomdomain"

apimanagementcustomdomain.NewApiManagementCustomDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementCustomDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



