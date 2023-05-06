# `azurerm_servicebus_namespace`

Refer to the Terraform Registory for docs: [`azurerm_servicebus_namespace`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace).

# `servicebusNamespace` Submodule <a name="`servicebusNamespace` Submodule" id="@cdktf/provider-azurerm.servicebusNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicebusNamespace <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace azurerm_servicebus_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.NewServicebusNamespace(scope Construct, id *string, config ServicebusNamespaceConfig) ServicebusNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig">ServicebusNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig">ServicebusNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey">PutCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCustomerManagedKey` <a name="PutCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey"></a>

```go
func PutCustomerManagedKey(value ServicebusNamespaceCustomerManagedKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity"></a>

```go
func PutIdentity(value ServicebusNamespaceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts"></a>

```go
func PutTimeouts(value ServicebusNamespaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCapacity"></a>

```go
func ResetCapacity()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetMinimumTlsVersion"></a>

```go
func ResetMinimumTlsVersion()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetPublicNetworkAccessEnabled"></a>

```go
func ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.resetZoneRedundant"></a>

```go
func ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.ServicebusNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.ServicebusNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.ServicebusNamespace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference">ServicebusNamespaceCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryConnectionString">DefaultPrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryKey">DefaultPrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryConnectionString">DefaultSecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryKey">DefaultSecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference">ServicebusNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference">ServicebusNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacityInput">CapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.skuInput">SkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.sku">Sku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKey"></a>

```go
func CustomerManagedKey() ServicebusNamespaceCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference">ServicebusNamespaceCustomerManagedKeyOutputReference</a>

---

##### `DefaultPrimaryConnectionString`<sup>Required</sup> <a name="DefaultPrimaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryConnectionString"></a>

```go
func DefaultPrimaryConnectionString() *string
```

- *Type:* *string

---

##### `DefaultPrimaryKey`<sup>Required</sup> <a name="DefaultPrimaryKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultPrimaryKey"></a>

```go
func DefaultPrimaryKey() *string
```

- *Type:* *string

---

##### `DefaultSecondaryConnectionString`<sup>Required</sup> <a name="DefaultSecondaryConnectionString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryConnectionString"></a>

```go
func DefaultSecondaryConnectionString() *string
```

- *Type:* *string

---

##### `DefaultSecondaryKey`<sup>Required</sup> <a name="DefaultSecondaryKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.defaultSecondaryKey"></a>

```go
func DefaultSecondaryKey() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identity"></a>

```go
func Identity() ServicebusNamespaceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference">ServicebusNamespaceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeouts"></a>

```go
func Timeouts() ServicebusNamespaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference">ServicebusNamespaceTimeoutsOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacityInput"></a>

```go
func CapacityInput() *f64
```

- *Type:* *f64

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() ServicebusNamespaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.identityInput"></a>

```go
func IdentityInput() ServicebusNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersionInput"></a>

```go
func MinimumTlsVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabledInput"></a>

```go
func PublicNetworkAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.skuInput"></a>

```go
func SkuInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.zoneRedundantInput"></a>

```go
func ZoneRedundantInput() interface{}
```

- *Type:* interface{}

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.sku"></a>

```go
func Sku() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.zoneRedundant"></a>

```go
func ZoneRedundant() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicebusNamespaceConfig <a name="ServicebusNamespaceConfig" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

&servicebusnamespace.ServicebusNamespaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Sku: *string,
	Capacity: *f64,
	CustomerManagedKey: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.servicebusNamespace.ServicebusNamespaceIdentity,
	LocalAuthEnabled: interface{},
	MinimumTlsVersion: *string,
	PublicNetworkAccessEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.servicebusNamespace.ServicebusNamespaceTimeouts,
	ZoneRedundant: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#location ServicebusNamespace#location}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#name ServicebusNamespace#name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.sku">Sku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#sku ServicebusNamespace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.capacity">Capacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#capacity ServicebusNamespace#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#id ServicebusNamespace#id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#tags ServicebusNamespace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#zone_redundant ServicebusNamespace#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#location ServicebusNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#name ServicebusNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#resource_group_name ServicebusNamespace#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.sku"></a>

```go
Sku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#sku ServicebusNamespace#sku}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.capacity"></a>

```go
Capacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#capacity ServicebusNamespace#capacity}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey ServicebusNamespaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#customer_managed_key ServicebusNamespace#customer_managed_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#id ServicebusNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.identity"></a>

```go
Identity ServicebusNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#identity ServicebusNamespace#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#local_auth_enabled ServicebusNamespace#local_auth_enabled}.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.minimumTlsVersion"></a>

```go
MinimumTlsVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#minimum_tls_version ServicebusNamespace#minimum_tls_version}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.publicNetworkAccessEnabled"></a>

```go
PublicNetworkAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#public_network_access_enabled ServicebusNamespace#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#tags ServicebusNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.timeouts"></a>

```go
Timeouts ServicebusNamespaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts">ServicebusNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#timeouts ServicebusNamespace#timeouts}

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceConfig.property.zoneRedundant"></a>

```go
ZoneRedundant interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#zone_redundant ServicebusNamespace#zone_redundant}.

---

### ServicebusNamespaceCustomerManagedKey <a name="ServicebusNamespaceCustomerManagedKey" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

&servicebusnamespace.ServicebusNamespaceCustomerManagedKey {
	IdentityId: *string,
	KeyVaultKeyId: *string,
	InfrastructureEncryptionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.identityId">IdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#identity_id ServicebusNamespace#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}. |

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.identityId"></a>

```go
IdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#identity_id ServicebusNamespace#identity_id}.

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#key_vault_key_id ServicebusNamespace#key_vault_key_id}.

---

##### `InfrastructureEncryptionEnabled`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled"></a>

```go
InfrastructureEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#infrastructure_encryption_enabled ServicebusNamespace#infrastructure_encryption_enabled}.

---

### ServicebusNamespaceIdentity <a name="ServicebusNamespaceIdentity" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

&servicebusnamespace.ServicebusNamespaceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#type ServicebusNamespace#type}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#type ServicebusNamespace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#identity_ids ServicebusNamespace#identity_ids}.

---

### ServicebusNamespaceTimeouts <a name="ServicebusNamespaceTimeouts" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

&servicebusnamespace.ServicebusNamespaceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#create ServicebusNamespace#create}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#delete ServicebusNamespace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#read ServicebusNamespace#read}. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#update ServicebusNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#create ServicebusNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#delete ServicebusNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#read ServicebusNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/servicebus_namespace#update ServicebusNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicebusNamespaceCustomerManagedKeyOutputReference <a name="ServicebusNamespaceCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.NewServicebusNamespaceCustomerManagedKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicebusNamespaceCustomerManagedKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resetInfrastructureEncryptionEnabled">ResetInfrastructureEncryptionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInfrastructureEncryptionEnabled` <a name="ResetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.resetInfrastructureEncryptionEnabled"></a>

```go
func ResetInfrastructureEncryptionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityIdInput">IdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityId">IdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityIdInput"></a>

```go
func IdentityIdInput() *string
```

- *Type:* *string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabledInput"></a>

```go
func InfrastructureEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.identityId"></a>

```go
func IdentityId() *string
```

- *Type:* *string

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.infrastructureEncryptionEnabled"></a>

```go
func InfrastructureEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicebusNamespaceCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceCustomerManagedKey">ServicebusNamespaceCustomerManagedKey</a>

---


### ServicebusNamespaceIdentityOutputReference <a name="ServicebusNamespaceIdentityOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.NewServicebusNamespaceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicebusNamespaceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicebusNamespaceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceIdentity">ServicebusNamespaceIdentity</a>

---


### ServicebusNamespaceTimeoutsOutputReference <a name="ServicebusNamespaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/servicebusnamespace"

servicebusnamespace.NewServicebusNamespaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicebusNamespaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.servicebusNamespace.ServicebusNamespaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



