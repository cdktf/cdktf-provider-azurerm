# `azurerm_spring_cloud_api_portal_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_api_portal_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain).

# `springCloudApiPortalCustomDomain` Submodule <a name="`springCloudApiPortalCustomDomain` Submodule" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApiPortalCustomDomain <a name="SpringCloudApiPortalCustomDomain" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain azurerm_spring_cloud_api_portal_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

springcloudapiportalcustomdomain.NewSpringCloudApiPortalCustomDomain(scope Construct, id *string, config SpringCloudApiPortalCustomDomainConfig) SpringCloudApiPortalCustomDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig">SpringCloudApiPortalCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig">SpringCloudApiPortalCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudApiPortalCustomDomainTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetThumbprint"></a>

```go
func ResetThumbprint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

springcloudapiportalcustomdomain.SpringCloudApiPortalCustomDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

springcloudapiportalcustomdomain.SpringCloudApiPortalCustomDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

springcloudapiportalcustomdomain.SpringCloudApiPortalCustomDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference">SpringCloudApiPortalCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalIdInput">SpringCloudApiPortalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalId">SpringCloudApiPortalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeouts"></a>

```go
func Timeouts() SpringCloudApiPortalCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference">SpringCloudApiPortalCustomDomainTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpringCloudApiPortalIdInput`<sup>Optional</sup> <a name="SpringCloudApiPortalIdInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalIdInput"></a>

```go
func SpringCloudApiPortalIdInput() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpringCloudApiPortalId`<sup>Required</sup> <a name="SpringCloudApiPortalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.springCloudApiPortalId"></a>

```go
func SpringCloudApiPortalId() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApiPortalCustomDomainConfig <a name="SpringCloudApiPortalCustomDomainConfig" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

&springcloudapiportalcustomdomain.SpringCloudApiPortalCustomDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SpringCloudApiPortalId: *string,
	Id: *string,
	Thumbprint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#name SpringCloudApiPortalCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.springCloudApiPortalId">SpringCloudApiPortalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#spring_cloud_api_portal_id SpringCloudApiPortalCustomDomain#spring_cloud_api_portal_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#id SpringCloudApiPortalCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#thumbprint SpringCloudApiPortalCustomDomain#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#name SpringCloudApiPortalCustomDomain#name}.

---

##### `SpringCloudApiPortalId`<sup>Required</sup> <a name="SpringCloudApiPortalId" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.springCloudApiPortalId"></a>

```go
SpringCloudApiPortalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#spring_cloud_api_portal_id SpringCloudApiPortalCustomDomain#spring_cloud_api_portal_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#id SpringCloudApiPortalCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#thumbprint SpringCloudApiPortalCustomDomain#thumbprint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainConfig.property.timeouts"></a>

```go
Timeouts SpringCloudApiPortalCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts">SpringCloudApiPortalCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#timeouts SpringCloudApiPortalCustomDomain#timeouts}

---

### SpringCloudApiPortalCustomDomainTimeouts <a name="SpringCloudApiPortalCustomDomainTimeouts" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

&springcloudapiportalcustomdomain.SpringCloudApiPortalCustomDomainTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#create SpringCloudApiPortalCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#delete SpringCloudApiPortalCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#read SpringCloudApiPortalCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#update SpringCloudApiPortalCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#create SpringCloudApiPortalCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#delete SpringCloudApiPortalCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#read SpringCloudApiPortalCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/spring_cloud_api_portal_custom_domain#update SpringCloudApiPortalCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApiPortalCustomDomainTimeoutsOutputReference <a name="SpringCloudApiPortalCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudapiportalcustomdomain"

springcloudapiportalcustomdomain.NewSpringCloudApiPortalCustomDomainTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudApiPortalCustomDomainTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudApiPortalCustomDomain.SpringCloudApiPortalCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



