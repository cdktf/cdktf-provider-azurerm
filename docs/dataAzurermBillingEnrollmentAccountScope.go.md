# `data_azurerm_billing_enrollment_account_scope`

Refer to the Terraform Registory for docs: [`data_azurerm_billing_enrollment_account_scope`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope).

# `dataAzurermBillingEnrollmentAccountScope` Submodule <a name="`dataAzurermBillingEnrollmentAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingEnrollmentAccountScope <a name="DataAzurermBillingEnrollmentAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope azurerm_billing_enrollment_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

dataazurermbillingenrollmentaccountscope.NewDataAzurermBillingEnrollmentAccountScope(scope Construct, id *string, config DataAzurermBillingEnrollmentAccountScopeConfig) DataAzurermBillingEnrollmentAccountScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermBillingEnrollmentAccountScopeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

dataazurermbillingenrollmentaccountscope.DataAzurermBillingEnrollmentAccountScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

dataazurermbillingenrollmentaccountscope.DataAzurermBillingEnrollmentAccountScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

dataazurermbillingenrollmentaccountscope.DataAzurermBillingEnrollmentAccountScope_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput">BillingAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput">EnrollmentAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName">BillingAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName">EnrollmentAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts"></a>

```go
func Timeouts() DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a>

---

##### `BillingAccountNameInput`<sup>Optional</sup> <a name="BillingAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput"></a>

```go
func BillingAccountNameInput() *string
```

- *Type:* *string

---

##### `EnrollmentAccountNameInput`<sup>Optional</sup> <a name="EnrollmentAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput"></a>

```go
func EnrollmentAccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName"></a>

```go
func BillingAccountName() *string
```

- *Type:* *string

---

##### `EnrollmentAccountName`<sup>Required</sup> <a name="EnrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName"></a>

```go
func EnrollmentAccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingEnrollmentAccountScopeConfig <a name="DataAzurermBillingEnrollmentAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

&dataazurermbillingenrollmentaccountscope.DataAzurermBillingEnrollmentAccountScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingAccountName: *string,
	EnrollmentAccountName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName">BillingAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName">EnrollmentAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName"></a>

```go
BillingAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}.

---

##### `EnrollmentAccountName`<sup>Required</sup> <a name="EnrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName"></a>

```go
EnrollmentAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts"></a>

```go
Timeouts DataAzurermBillingEnrollmentAccountScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#timeouts DataAzurermBillingEnrollmentAccountScope#timeouts}

---

### DataAzurermBillingEnrollmentAccountScopeTimeouts <a name="DataAzurermBillingEnrollmentAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

&dataazurermbillingenrollmentaccountscope.DataAzurermBillingEnrollmentAccountScopeTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermbillingenrollmentaccountscope"

dataazurermbillingenrollmentaccountscope.NewDataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



