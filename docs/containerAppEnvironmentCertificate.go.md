# `azurerm_container_app_environment_certificate`

Refer to the Terraform Registory for docs: [`azurerm_container_app_environment_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate).

# `containerAppEnvironmentCertificate` Submodule <a name="`containerAppEnvironmentCertificate` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentCertificate <a name="ContainerAppEnvironmentCertificate" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate azurerm_container_app_environment_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

containerappenvironmentcertificate.NewContainerAppEnvironmentCertificate(scope Construct, id *string, config ContainerAppEnvironmentCertificateConfig) ContainerAppEnvironmentCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig">ContainerAppEnvironmentCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig">ContainerAppEnvironmentCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.putTimeouts"></a>

```go
func PutTimeouts(value ContainerAppEnvironmentCertificateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts">ContainerAppEnvironmentCertificateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

containerappenvironmentcertificate.ContainerAppEnvironmentCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

containerappenvironmentcertificate.ContainerAppEnvironmentCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

containerappenvironmentcertificate.ContainerAppEnvironmentCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.expirationDate">ExpirationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.issueDate">IssueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.subjectName">SubjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference">ContainerAppEnvironmentCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificateBlobBase64Input">CertificateBlobBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificateBlobBase64">CertificateBlobBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.expirationDate"></a>

```go
func ExpirationDate() *string
```

- *Type:* *string

---

##### `IssueDate`<sup>Required</sup> <a name="IssueDate" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.issueDate"></a>

```go
func IssueDate() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.subjectName"></a>

```go
func SubjectName() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.timeouts"></a>

```go
func Timeouts() ContainerAppEnvironmentCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference">ContainerAppEnvironmentCertificateTimeoutsOutputReference</a>

---

##### `CertificateBlobBase64Input`<sup>Optional</sup> <a name="CertificateBlobBase64Input" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificateBlobBase64Input"></a>

```go
func CertificateBlobBase64Input() *string
```

- *Type:* *string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificatePasswordInput"></a>

```go
func CertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput"></a>

```go
func ContainerAppEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateBlobBase64`<sup>Required</sup> <a name="CertificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificateBlobBase64"></a>

```go
func CertificateBlobBase64() *string
```

- *Type:* *string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.certificatePassword"></a>

```go
func CertificatePassword() *string
```

- *Type:* *string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.containerAppEnvironmentId"></a>

```go
func ContainerAppEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentCertificateConfig <a name="ContainerAppEnvironmentCertificateConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

&containerappenvironmentcertificate.ContainerAppEnvironmentCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateBlobBase64: *string,
	CertificatePassword: *string,
	ContainerAppEnvironmentId: *string,
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.certificateBlobBase64">CertificateBlobBase64</a></code> | <code>*string</code> | The Certificate Private Key as a base64 encoded PFX or PEM. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.certificatePassword">CertificatePassword</a></code> | <code>*string</code> | The password for the Certificate. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>*string</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Container Apps Environment Certificate. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#id ContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#tags ContainerAppEnvironmentCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts">ContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateBlobBase64`<sup>Required</sup> <a name="CertificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.certificateBlobBase64"></a>

```go
CertificateBlobBase64 *string
```

- *Type:* *string

The Certificate Private Key as a base64 encoded PFX or PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#certificate_blob_base64 ContainerAppEnvironmentCertificate#certificate_blob_base64}

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.certificatePassword"></a>

```go
CertificatePassword *string
```

- *Type:* *string

The password for the Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#certificate_password ContainerAppEnvironmentCertificate#certificate_password}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId"></a>

```go
ContainerAppEnvironmentId *string
```

- *Type:* *string

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#container_app_environment_id ContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Container Apps Environment Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#name ContainerAppEnvironmentCertificate#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#id ContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#tags ContainerAppEnvironmentCertificate#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateConfig.property.timeouts"></a>

```go
Timeouts ContainerAppEnvironmentCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts">ContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#timeouts ContainerAppEnvironmentCertificate#timeouts}

---

### ContainerAppEnvironmentCertificateTimeouts <a name="ContainerAppEnvironmentCertificateTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

&containerappenvironmentcertificate.ContainerAppEnvironmentCertificateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#create ContainerAppEnvironmentCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#delete ContainerAppEnvironmentCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#read ContainerAppEnvironmentCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#update ContainerAppEnvironmentCertificate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#create ContainerAppEnvironmentCertificate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#delete ContainerAppEnvironmentCertificate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#read ContainerAppEnvironmentCertificate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/container_app_environment_certificate#update ContainerAppEnvironmentCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentCertificateTimeoutsOutputReference <a name="ContainerAppEnvironmentCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/containerappenvironmentcertificate"

containerappenvironmentcertificate.NewContainerAppEnvironmentCertificateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerAppEnvironmentCertificateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentCertificate.ContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



