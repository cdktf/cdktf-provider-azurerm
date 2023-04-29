# `azurerm_spring_cloud_gateway_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_gateway_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain).

# `springCloudGatewayCustomDomain` Submodule <a name="`springCloudGatewayCustomDomain` Submodule" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGatewayCustomDomain <a name="SpringCloudGatewayCustomDomain" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain azurerm_spring_cloud_gateway_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

springcloudgatewaycustomdomain.NewSpringCloudGatewayCustomDomain(scope Construct, id *string, config SpringCloudGatewayCustomDomainConfig) SpringCloudGatewayCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig">SpringCloudGatewayCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig">SpringCloudGatewayCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudGatewayCustomDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetThumbprint"></a>

```go
func ResetThumbprint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

springcloudgatewaycustomdomain.SpringCloudGatewayCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

springcloudgatewaycustomdomain.SpringCloudGatewayCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

springcloudgatewaycustomdomain.SpringCloudGatewayCustomDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference">SpringCloudGatewayCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayIdInput">SpringCloudGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayId">SpringCloudGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeouts"></a>

```go
func Timeouts() SpringCloudGatewayCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference">SpringCloudGatewayCustomDomainTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudGatewayIdInput`<sup>Optional</sup> <a name="SpringCloudGatewayIdInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayIdInput"></a>

```go
func SpringCloudGatewayIdInput() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudGatewayId`<sup>Required</sup> <a name="SpringCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayId"></a>

```go
func SpringCloudGatewayId() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayCustomDomainConfig <a name="SpringCloudGatewayCustomDomainConfig" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

&springcloudgatewaycustomdomain.SpringCloudGatewayCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpringCloudGatewayId: *string,
	Id: *string,
	Thumbprint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.springCloudGatewayId">SpringCloudGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}.

---

##### `SpringCloudGatewayId`<sup>Required</sup> <a name="SpringCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.springCloudGatewayId"></a>

```go
SpringCloudGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.timeouts"></a>

```go
Timeouts SpringCloudGatewayCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#timeouts SpringCloudGatewayCustomDomain#timeouts}

---

### SpringCloudGatewayCustomDomainTimeouts <a name="SpringCloudGatewayCustomDomainTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

&springcloudgatewaycustomdomain.SpringCloudGatewayCustomDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#create SpringCloudGatewayCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#delete SpringCloudGatewayCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#read SpringCloudGatewayCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#update SpringCloudGatewayCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#create SpringCloudGatewayCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#delete SpringCloudGatewayCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#read SpringCloudGatewayCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#update SpringCloudGatewayCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayCustomDomainTimeoutsOutputReference <a name="SpringCloudGatewayCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudgatewaycustomdomain"

springcloudgatewaycustomdomain.NewSpringCloudGatewayCustomDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudGatewayCustomDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



