# `azurerm_api_management_identity_provider_aadb2c`

Refer to the Terraform Registory for docs: [`azurerm_api_management_identity_provider_aadb2c`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c).

# `apiManagementIdentityProviderAadb2C` Submodule <a name="`apiManagementIdentityProviderAadb2C` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderAadb2C <a name="ApiManagementIdentityProviderAadb2C" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c azurerm_api_management_identity_provider_aadb2c}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

apimanagementidentityprovideraadb2c.NewApiManagementIdentityProviderAadb2C(scope Construct, id *string, config ApiManagementIdentityProviderAadb2CConfig) ApiManagementIdentityProviderAadb2C
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig">ApiManagementIdentityProviderAadb2CConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig">ApiManagementIdentityProviderAadb2CConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetPasswordResetPolicy">ResetPasswordResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetProfileEditingPolicy">ResetProfileEditingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts"></a>

```go
func PutTimeouts(value ApiManagementIdentityProviderAadb2CTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetId"></a>

```go
func ResetId()
```

##### `ResetPasswordResetPolicy` <a name="ResetPasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetPasswordResetPolicy"></a>

```go
func ResetPasswordResetPolicy()
```

##### `ResetProfileEditingPolicy` <a name="ResetProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetProfileEditingPolicy"></a>

```go
func ResetProfileEditingPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

apimanagementidentityprovideraadb2c.ApiManagementIdentityProviderAadb2C_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

apimanagementidentityprovideraadb2c.ApiManagementIdentityProviderAadb2C_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

apimanagementidentityprovideraadb2c.ApiManagementIdentityProviderAadb2C_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference">ApiManagementIdentityProviderAadb2CTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenantInput">AllowedTenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authorityInput">AuthorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicyInput">PasswordResetPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicyInput">ProfileEditingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicyInput">SigninPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenantInput">SigninTenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicyInput">SignupPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenant">AllowedTenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authority">Authority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicy">PasswordResetPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicy">ProfileEditingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicy">SigninPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenant">SigninTenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicy">SignupPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeouts"></a>

```go
func Timeouts() ApiManagementIdentityProviderAadb2CTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference">ApiManagementIdentityProviderAadb2CTimeoutsOutputReference</a>

---

##### `AllowedTenantInput`<sup>Optional</sup> <a name="AllowedTenantInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenantInput"></a>

```go
func AllowedTenantInput() *string
```

- *Type:* *string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementNameInput"></a>

```go
func ApiManagementNameInput() *string
```

- *Type:* *string

---

##### `AuthorityInput`<sup>Optional</sup> <a name="AuthorityInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authorityInput"></a>

```go
func AuthorityInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordResetPolicyInput`<sup>Optional</sup> <a name="PasswordResetPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicyInput"></a>

```go
func PasswordResetPolicyInput() *string
```

- *Type:* *string

---

##### `ProfileEditingPolicyInput`<sup>Optional</sup> <a name="ProfileEditingPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicyInput"></a>

```go
func ProfileEditingPolicyInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SigninPolicyInput`<sup>Optional</sup> <a name="SigninPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicyInput"></a>

```go
func SigninPolicyInput() *string
```

- *Type:* *string

---

##### `SigninTenantInput`<sup>Optional</sup> <a name="SigninTenantInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenantInput"></a>

```go
func SigninTenantInput() *string
```

- *Type:* *string

---

##### `SignupPolicyInput`<sup>Optional</sup> <a name="SignupPolicyInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicyInput"></a>

```go
func SignupPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedTenant`<sup>Required</sup> <a name="AllowedTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.allowedTenant"></a>

```go
func AllowedTenant() *string
```

- *Type:* *string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.apiManagementName"></a>

```go
func ApiManagementName() *string
```

- *Type:* *string

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.authority"></a>

```go
func Authority() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PasswordResetPolicy`<sup>Required</sup> <a name="PasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.passwordResetPolicy"></a>

```go
func PasswordResetPolicy() *string
```

- *Type:* *string

---

##### `ProfileEditingPolicy`<sup>Required</sup> <a name="ProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.profileEditingPolicy"></a>

```go
func ProfileEditingPolicy() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SigninPolicy`<sup>Required</sup> <a name="SigninPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinPolicy"></a>

```go
func SigninPolicy() *string
```

- *Type:* *string

---

##### `SigninTenant`<sup>Required</sup> <a name="SigninTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signinTenant"></a>

```go
func SigninTenant() *string
```

- *Type:* *string

---

##### `SignupPolicy`<sup>Required</sup> <a name="SignupPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.signupPolicy"></a>

```go
func SignupPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2C.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderAadb2CConfig <a name="ApiManagementIdentityProviderAadb2CConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

&apimanagementidentityprovideraadb2c.ApiManagementIdentityProviderAadb2CConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedTenant: *string,
	ApiManagementName: *string,
	Authority: *string,
	ClientId: *string,
	ClientSecret: *string,
	ResourceGroupName: *string,
	SigninPolicy: *string,
	SigninTenant: *string,
	SignupPolicy: *string,
	Id: *string,
	PasswordResetPolicy: *string,
	ProfileEditingPolicy: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.allowedTenant">AllowedTenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.apiManagementName">ApiManagementName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.authority">Authority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#authority ApiManagementIdentityProviderAadb2C#authority}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#client_id ApiManagementIdentityProviderAadb2C#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#client_secret ApiManagementIdentityProviderAadb2C#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinPolicy">SigninPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinTenant">SigninTenant</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signupPolicy">SignupPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#id ApiManagementIdentityProviderAadb2C#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.passwordResetPolicy">PasswordResetPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.profileEditingPolicy">ProfileEditingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedTenant`<sup>Required</sup> <a name="AllowedTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.allowedTenant"></a>

```go
AllowedTenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#allowed_tenant ApiManagementIdentityProviderAadb2C#allowed_tenant}.

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.apiManagementName"></a>

```go
ApiManagementName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#api_management_name ApiManagementIdentityProviderAadb2C#api_management_name}.

---

##### `Authority`<sup>Required</sup> <a name="Authority" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.authority"></a>

```go
Authority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#authority ApiManagementIdentityProviderAadb2C#authority}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#client_id ApiManagementIdentityProviderAadb2C#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#client_secret ApiManagementIdentityProviderAadb2C#client_secret}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#resource_group_name ApiManagementIdentityProviderAadb2C#resource_group_name}.

---

##### `SigninPolicy`<sup>Required</sup> <a name="SigninPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinPolicy"></a>

```go
SigninPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signin_policy ApiManagementIdentityProviderAadb2C#signin_policy}.

---

##### `SigninTenant`<sup>Required</sup> <a name="SigninTenant" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signinTenant"></a>

```go
SigninTenant *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signin_tenant ApiManagementIdentityProviderAadb2C#signin_tenant}.

---

##### `SignupPolicy`<sup>Required</sup> <a name="SignupPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.signupPolicy"></a>

```go
SignupPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#signup_policy ApiManagementIdentityProviderAadb2C#signup_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#id ApiManagementIdentityProviderAadb2C#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordResetPolicy`<sup>Optional</sup> <a name="PasswordResetPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.passwordResetPolicy"></a>

```go
PasswordResetPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#password_reset_policy ApiManagementIdentityProviderAadb2C#password_reset_policy}.

---

##### `ProfileEditingPolicy`<sup>Optional</sup> <a name="ProfileEditingPolicy" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.profileEditingPolicy"></a>

```go
ProfileEditingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#profile_editing_policy ApiManagementIdentityProviderAadb2C#profile_editing_policy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CConfig.property.timeouts"></a>

```go
Timeouts ApiManagementIdentityProviderAadb2CTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts">ApiManagementIdentityProviderAadb2CTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#timeouts ApiManagementIdentityProviderAadb2C#timeouts}

---

### ApiManagementIdentityProviderAadb2CTimeouts <a name="ApiManagementIdentityProviderAadb2CTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

&apimanagementidentityprovideraadb2c.ApiManagementIdentityProviderAadb2CTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#create ApiManagementIdentityProviderAadb2C#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#delete ApiManagementIdentityProviderAadb2C#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#read ApiManagementIdentityProviderAadb2C#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#update ApiManagementIdentityProviderAadb2C#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#create ApiManagementIdentityProviderAadb2C#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#delete ApiManagementIdentityProviderAadb2C#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#read ApiManagementIdentityProviderAadb2C#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/api_management_identity_provider_aadb2c#update ApiManagementIdentityProviderAadb2C#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderAadb2CTimeoutsOutputReference <a name="ApiManagementIdentityProviderAadb2CTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/apimanagementidentityprovideraadb2c"

apimanagementidentityprovideraadb2c.NewApiManagementIdentityProviderAadb2CTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiManagementIdentityProviderAadb2CTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderAadb2C.ApiManagementIdentityProviderAadb2CTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



