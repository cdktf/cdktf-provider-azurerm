# `azurerm_automation_connection_service_principal`

Refer to the Terraform Registory for docs: [`azurerm_automation_connection_service_principal`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal).

# `automationConnectionServicePrincipal` Submodule <a name="`automationConnectionServicePrincipal` Submodule" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationConnectionServicePrincipal <a name="AutomationConnectionServicePrincipal" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal azurerm_automation_connection_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

automationconnectionserviceprincipal.NewAutomationConnectionServicePrincipal(scope Construct, id *string, config AutomationConnectionServicePrincipalConfig) AutomationConnectionServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig">AutomationConnectionServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig">AutomationConnectionServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.putTimeouts"></a>

```go
func PutTimeouts(value AutomationConnectionServicePrincipalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts">AutomationConnectionServicePrincipalTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

automationconnectionserviceprincipal.AutomationConnectionServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

automationconnectionserviceprincipal.AutomationConnectionServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

automationconnectionserviceprincipal.AutomationConnectionServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference">AutomationConnectionServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.automationAccountNameInput">AutomationAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.certificateThumbprintInput">CertificateThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.timeouts"></a>

```go
func Timeouts() AutomationConnectionServicePrincipalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference">AutomationConnectionServicePrincipalTimeoutsOutputReference</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `AutomationAccountNameInput`<sup>Optional</sup> <a name="AutomationAccountNameInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.automationAccountNameInput"></a>

```go
func AutomationAccountNameInput() *string
```

- *Type:* *string

---

##### `CertificateThumbprintInput`<sup>Optional</sup> <a name="CertificateThumbprintInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.certificateThumbprintInput"></a>

```go
func CertificateThumbprintInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.automationAccountName"></a>

```go
func AutomationAccountName() *string
```

- *Type:* *string

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.certificateThumbprint"></a>

```go
func CertificateThumbprint() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationConnectionServicePrincipalConfig <a name="AutomationConnectionServicePrincipalConfig" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

&automationconnectionserviceprincipal.AutomationConnectionServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	AutomationAccountName: *string,
	CertificateThumbprint: *string,
	Name: *string,
	ResourceGroupName: *string,
	SubscriptionId: *string,
	TenantId: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#application_id AutomationConnectionServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.automationAccountName">AutomationAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#automation_account_name AutomationConnectionServicePrincipal#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#certificate_thumbprint AutomationConnectionServicePrincipal#certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#name AutomationConnectionServicePrincipal#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#resource_group_name AutomationConnectionServicePrincipal#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#subscription_id AutomationConnectionServicePrincipal#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#tenant_id AutomationConnectionServicePrincipal#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#description AutomationConnectionServicePrincipal#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#id AutomationConnectionServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts">AutomationConnectionServicePrincipalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#application_id AutomationConnectionServicePrincipal#application_id}.

---

##### `AutomationAccountName`<sup>Required</sup> <a name="AutomationAccountName" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.automationAccountName"></a>

```go
AutomationAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#automation_account_name AutomationConnectionServicePrincipal#automation_account_name}.

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.certificateThumbprint"></a>

```go
CertificateThumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#certificate_thumbprint AutomationConnectionServicePrincipal#certificate_thumbprint}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#name AutomationConnectionServicePrincipal#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#resource_group_name AutomationConnectionServicePrincipal#resource_group_name}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#subscription_id AutomationConnectionServicePrincipal#subscription_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#tenant_id AutomationConnectionServicePrincipal#tenant_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#description AutomationConnectionServicePrincipal#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#id AutomationConnectionServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalConfig.property.timeouts"></a>

```go
Timeouts AutomationConnectionServicePrincipalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts">AutomationConnectionServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#timeouts AutomationConnectionServicePrincipal#timeouts}

---

### AutomationConnectionServicePrincipalTimeouts <a name="AutomationConnectionServicePrincipalTimeouts" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

&automationconnectionserviceprincipal.AutomationConnectionServicePrincipalTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#create AutomationConnectionServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#delete AutomationConnectionServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#read AutomationConnectionServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#update AutomationConnectionServicePrincipal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#create AutomationConnectionServicePrincipal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#delete AutomationConnectionServicePrincipal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#read AutomationConnectionServicePrincipal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/automation_connection_service_principal#update AutomationConnectionServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationConnectionServicePrincipalTimeoutsOutputReference <a name="AutomationConnectionServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v8/automationconnectionserviceprincipal"

automationconnectionserviceprincipal.NewAutomationConnectionServicePrincipalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationConnectionServicePrincipalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationConnectionServicePrincipal.AutomationConnectionServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



