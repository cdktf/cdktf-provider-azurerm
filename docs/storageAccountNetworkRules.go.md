# `azurerm_storage_account_network_rules`

Refer to the Terraform Registory for docs: [`azurerm_storage_account_network_rules`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules).

# `storageAccountNetworkRules` Submodule <a name="`storageAccountNetworkRules` Submodule" id="@cdktf/provider-azurerm.storageAccountNetworkRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountNetworkRulesA <a name="StorageAccountNetworkRulesA" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules azurerm_storage_account_network_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.NewStorageAccountNetworkRulesA(scope Construct, id *string, config StorageAccountNetworkRulesAConfig) StorageAccountNetworkRulesA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig">StorageAccountNetworkRulesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig">StorageAccountNetworkRulesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putPrivateLinkAccess">PutPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetBypass">ResetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetIpRules">ResetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetPrivateLinkAccess">ResetPrivateLinkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetVirtualNetworkSubnetIds">ResetVirtualNetworkSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPrivateLinkAccess` <a name="PutPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putPrivateLinkAccess"></a>

```go
func PutPrivateLinkAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putPrivateLinkAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putTimeouts"></a>

```go
func PutTimeouts(value StorageAccountNetworkRulesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts">StorageAccountNetworkRulesTimeouts</a>

---

##### `ResetBypass` <a name="ResetBypass" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetBypass"></a>

```go
func ResetBypass()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetId"></a>

```go
func ResetId()
```

##### `ResetIpRules` <a name="ResetIpRules" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetIpRules"></a>

```go
func ResetIpRules()
```

##### `ResetPrivateLinkAccess` <a name="ResetPrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetPrivateLinkAccess"></a>

```go
func ResetPrivateLinkAccess()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNetworkSubnetIds` <a name="ResetVirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.resetVirtualNetworkSubnetIds"></a>

```go
func ResetVirtualNetworkSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.StorageAccountNetworkRulesA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.StorageAccountNetworkRulesA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.StorageAccountNetworkRulesA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList">StorageAccountNetworkRulesPrivateLinkAccessAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference">StorageAccountNetworkRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.bypassInput">BypassInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.defaultActionInput">DefaultActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.ipRulesInput">IpRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.privateLinkAccessInput">PrivateLinkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.virtualNetworkSubnetIdsInput">VirtualNetworkSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.bypass">Bypass</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrivateLinkAccess`<sup>Required</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.privateLinkAccess"></a>

```go
func PrivateLinkAccess() StorageAccountNetworkRulesPrivateLinkAccessAList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList">StorageAccountNetworkRulesPrivateLinkAccessAList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.timeouts"></a>

```go
func Timeouts() StorageAccountNetworkRulesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference">StorageAccountNetworkRulesTimeoutsOutputReference</a>

---

##### `BypassInput`<sup>Optional</sup> <a name="BypassInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.bypassInput"></a>

```go
func BypassInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.defaultActionInput"></a>

```go
func DefaultActionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpRulesInput`<sup>Optional</sup> <a name="IpRulesInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.ipRulesInput"></a>

```go
func IpRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateLinkAccessInput`<sup>Optional</sup> <a name="PrivateLinkAccessInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.privateLinkAccessInput"></a>

```go
func PrivateLinkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNetworkSubnetIdsInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdsInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.virtualNetworkSubnetIdsInput"></a>

```go
func VirtualNetworkSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.bypass"></a>

```go
func Bypass() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.defaultAction"></a>

```go
func DefaultAction() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.ipRules"></a>

```go
func IpRules() *[]*string
```

- *Type:* *[]*string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetIds`<sup>Required</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.virtualNetworkSubnetIds"></a>

```go
func VirtualNetworkSubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountNetworkRulesAConfig <a name="StorageAccountNetworkRulesAConfig" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

&storageaccountnetworkrules.StorageAccountNetworkRulesAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultAction: *string,
	StorageAccountId: *string,
	Bypass: *[]*string,
	Id: *string,
	IpRules: *[]*string,
	PrivateLinkAccess: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts,
	VirtualNetworkSubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.defaultAction">DefaultAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#default_action StorageAccountNetworkRulesA#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#storage_account_id StorageAccountNetworkRulesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.bypass">Bypass</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#bypass StorageAccountNetworkRulesA#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#id StorageAccountNetworkRulesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.ipRules">IpRules</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#ip_rules StorageAccountNetworkRulesA#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.privateLinkAccess">PrivateLinkAccess</a></code> | <code>interface{}</code> | private_link_access block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts">StorageAccountNetworkRulesTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.virtualNetworkSubnetIds">VirtualNetworkSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#virtual_network_subnet_ids StorageAccountNetworkRulesA#virtual_network_subnet_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.defaultAction"></a>

```go
DefaultAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#default_action StorageAccountNetworkRulesA#default_action}.

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#storage_account_id StorageAccountNetworkRulesA#storage_account_id}.

---

##### `Bypass`<sup>Optional</sup> <a name="Bypass" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.bypass"></a>

```go
Bypass *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#bypass StorageAccountNetworkRulesA#bypass}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#id StorageAccountNetworkRulesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRules`<sup>Optional</sup> <a name="IpRules" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.ipRules"></a>

```go
IpRules *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#ip_rules StorageAccountNetworkRulesA#ip_rules}.

---

##### `PrivateLinkAccess`<sup>Optional</sup> <a name="PrivateLinkAccess" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.privateLinkAccess"></a>

```go
PrivateLinkAccess interface{}
```

- *Type:* interface{}

private_link_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#private_link_access StorageAccountNetworkRulesA#private_link_access}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.timeouts"></a>

```go
Timeouts StorageAccountNetworkRulesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts">StorageAccountNetworkRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#timeouts StorageAccountNetworkRulesA#timeouts}

---

##### `VirtualNetworkSubnetIds`<sup>Optional</sup> <a name="VirtualNetworkSubnetIds" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesAConfig.property.virtualNetworkSubnetIds"></a>

```go
VirtualNetworkSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#virtual_network_subnet_ids StorageAccountNetworkRulesA#virtual_network_subnet_ids}.

---

### StorageAccountNetworkRulesPrivateLinkAccessA <a name="StorageAccountNetworkRulesPrivateLinkAccessA" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

&storageaccountnetworkrules.StorageAccountNetworkRulesPrivateLinkAccessA {
	EndpointResourceId: *string,
	EndpointTenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA.property.endpointResourceId">EndpointResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#endpoint_resource_id StorageAccountNetworkRulesA#endpoint_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA.property.endpointTenantId">EndpointTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#endpoint_tenant_id StorageAccountNetworkRulesA#endpoint_tenant_id}. |

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA.property.endpointResourceId"></a>

```go
EndpointResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#endpoint_resource_id StorageAccountNetworkRulesA#endpoint_resource_id}.

---

##### `EndpointTenantId`<sup>Optional</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessA.property.endpointTenantId"></a>

```go
EndpointTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#endpoint_tenant_id StorageAccountNetworkRulesA#endpoint_tenant_id}.

---

### StorageAccountNetworkRulesTimeouts <a name="StorageAccountNetworkRulesTimeouts" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

&storageaccountnetworkrules.StorageAccountNetworkRulesTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#create StorageAccountNetworkRulesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#delete StorageAccountNetworkRulesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#read StorageAccountNetworkRulesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#update StorageAccountNetworkRulesA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#create StorageAccountNetworkRulesA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#delete StorageAccountNetworkRulesA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#read StorageAccountNetworkRulesA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/storage_account_network_rules#update StorageAccountNetworkRulesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountNetworkRulesPrivateLinkAccessAList <a name="StorageAccountNetworkRulesPrivateLinkAccessAList" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.NewStorageAccountNetworkRulesPrivateLinkAccessAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountNetworkRulesPrivateLinkAccessAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.get"></a>

```go
func Get(index *f64) StorageAccountNetworkRulesPrivateLinkAccessAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountNetworkRulesPrivateLinkAccessAOutputReference <a name="StorageAccountNetworkRulesPrivateLinkAccessAOutputReference" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.NewStorageAccountNetworkRulesPrivateLinkAccessAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountNetworkRulesPrivateLinkAccessAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.resetEndpointTenantId">ResetEndpointTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointTenantId` <a name="ResetEndpointTenantId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.resetEndpointTenantId"></a>

```go
func ResetEndpointTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointResourceIdInput">EndpointResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointTenantIdInput">EndpointTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointResourceId">EndpointResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointTenantId">EndpointTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointResourceIdInput`<sup>Optional</sup> <a name="EndpointResourceIdInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointResourceIdInput"></a>

```go
func EndpointResourceIdInput() *string
```

- *Type:* *string

---

##### `EndpointTenantIdInput`<sup>Optional</sup> <a name="EndpointTenantIdInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointTenantIdInput"></a>

```go
func EndpointTenantIdInput() *string
```

- *Type:* *string

---

##### `EndpointResourceId`<sup>Required</sup> <a name="EndpointResourceId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointResourceId"></a>

```go
func EndpointResourceId() *string
```

- *Type:* *string

---

##### `EndpointTenantId`<sup>Required</sup> <a name="EndpointTenantId" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.endpointTenantId"></a>

```go
func EndpointTenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesPrivateLinkAccessAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountNetworkRulesTimeoutsOutputReference <a name="StorageAccountNetworkRulesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/storageaccountnetworkrules"

storageaccountnetworkrules.NewStorageAccountNetworkRulesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountNetworkRulesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountNetworkRules.StorageAccountNetworkRulesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



