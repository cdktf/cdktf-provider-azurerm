# `data_azurerm_app_service_certificate_order`

Refer to the Terraform Registory for docs: [`data_azurerm_app_service_certificate_order`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order).

# `dataAzurermAppServiceCertificateOrder` Submodule <a name="`dataAzurermAppServiceCertificateOrder` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceCertificateOrder <a name="DataAzurermAppServiceCertificateOrder" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.NewDataAzurermAppServiceCertificateOrder(scope Construct, id *string, config DataAzurermAppServiceCertificateOrderConfig) DataAzurermAppServiceCertificateOrder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig">DataAzurermAppServiceCertificateOrderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig">DataAzurermAppServiceCertificateOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermAppServiceCertificateOrderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrder_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">AppServiceCertificateNotRenewableReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew">AutoRenew</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr">Csr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName">DistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken">DomainVerificationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint">IntermediateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal">IsPrivateKeyExternal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize">KeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType">ProductType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint">RootThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint">SignedCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears">ValidityInYears</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="AppServiceCertificateNotRenewableReasons" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```go
func AppServiceCertificateNotRenewableReasons() *[]*string
```

- *Type:* *[]*string

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew"></a>

```go
func AutoRenew() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates"></a>

```go
func Certificates() DataAzurermAppServiceCertificateOrderCertificatesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a>

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr"></a>

```go
func Csr() *string
```

- *Type:* *string

---

##### `DistinguishedName`<sup>Required</sup> <a name="DistinguishedName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName"></a>

```go
func DistinguishedName() *string
```

- *Type:* *string

---

##### `DomainVerificationToken`<sup>Required</sup> <a name="DomainVerificationToken" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken"></a>

```go
func DomainVerificationToken() *string
```

- *Type:* *string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `IntermediateThumbprint`<sup>Required</sup> <a name="IntermediateThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint"></a>

```go
func IntermediateThumbprint() *string
```

- *Type:* *string

---

##### `IsPrivateKeyExternal`<sup>Required</sup> <a name="IsPrivateKeyExternal" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```go
func IsPrivateKeyExternal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize"></a>

```go
func KeySize() *f64
```

- *Type:* *f64

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType"></a>

```go
func ProductType() *string
```

- *Type:* *string

---

##### `RootThumbprint`<sup>Required</sup> <a name="RootThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint"></a>

```go
func RootThumbprint() *string
```

- *Type:* *string

---

##### `SignedCertificateThumbprint`<sup>Required</sup> <a name="SignedCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```go
func SignedCertificateThumbprint() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts"></a>

```go
func Timeouts() DataAzurermAppServiceCertificateOrderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `ValidityInYears`<sup>Required</sup> <a name="ValidityInYears" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears"></a>

```go
func ValidityInYears() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceCertificateOrderCertificates <a name="DataAzurermAppServiceCertificateOrderCertificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

&dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrderCertificates {

}
```


### DataAzurermAppServiceCertificateOrderConfig <a name="DataAzurermAppServiceCertificateOrderConfig" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

&dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts"></a>

```go
Timeouts DataAzurermAppServiceCertificateOrderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#timeouts DataAzurermAppServiceCertificateOrder#timeouts}

---

### DataAzurermAppServiceCertificateOrderTimeouts <a name="DataAzurermAppServiceCertificateOrderTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

&dataazurermappservicecertificateorder.DataAzurermAppServiceCertificateOrderTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceCertificateOrderCertificatesList <a name="DataAzurermAppServiceCertificateOrderCertificatesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.NewDataAzurermAppServiceCertificateOrderCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermAppServiceCertificateOrderCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get"></a>

```go
func Get(index *f64) DataAzurermAppServiceCertificateOrderCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermAppServiceCertificateOrderCertificatesOutputReference <a name="DataAzurermAppServiceCertificateOrderCertificatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.NewDataAzurermAppServiceCertificateOrderCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermAppServiceCertificateOrderCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">KeyVaultSecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">ProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```go
func KeyVaultId() *string
```

- *Type:* *string

---

##### `KeyVaultSecretName`<sup>Required</sup> <a name="KeyVaultSecretName" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```go
func KeyVaultSecretName() *string
```

- *Type:* *string

---

##### `ProvisioningState`<sup>Required</sup> <a name="ProvisioningState" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```go
func ProvisioningState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermAppServiceCertificateOrderCertificates
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a>

---


### DataAzurermAppServiceCertificateOrderTimeoutsOutputReference <a name="DataAzurermAppServiceCertificateOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermappservicecertificateorder"

dataazurermappservicecertificateorder.NewDataAzurermAppServiceCertificateOrderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermAppServiceCertificateOrderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



