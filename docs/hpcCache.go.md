# `azurerm_hpc_cache`

Refer to the Terraform Registory for docs: [`azurerm_hpc_cache`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache).

# `hpcCache` Submodule <a name="`hpcCache` Submodule" id="@cdktf/provider-azurerm.hpcCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCache <a name="HpcCache" id="@cdktf/provider-azurerm.hpcCache.HpcCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache azurerm_hpc_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCache(scope Construct, id *string, config HpcCacheConfig) HpcCache
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.hpcCache.HpcCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig">HpcCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy">PutDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory">PutDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile">PutDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap">PutDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled">ResetAutomaticallyRotateKeyToLatestEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy">ResetDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory">ResetDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile">ResetDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap">ResetDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId">ResetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer">ResetNtpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.hpcCache.HpcCache.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDefaultAccessPolicy` <a name="PutDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy"></a>

```go
func PutDefaultAccessPolicy(value HpcCacheDefaultAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDefaultAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `PutDirectoryActiveDirectory` <a name="PutDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory"></a>

```go
func PutDirectoryActiveDirectory(value HpcCacheDirectoryActiveDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `PutDirectoryFlatFile` <a name="PutDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile"></a>

```go
func PutDirectoryFlatFile(value HpcCacheDirectoryFlatFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryFlatFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `PutDirectoryLdap` <a name="PutDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap"></a>

```go
func PutDirectoryLdap(value HpcCacheDirectoryLdap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDirectoryLdap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `PutDns` <a name="PutDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns"></a>

```go
func PutDns(value HpcCacheDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity"></a>

```go
func PutIdentity(value HpcCacheIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts"></a>

```go
func PutTimeouts(value HpcCacheTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

---

##### `ResetAutomaticallyRotateKeyToLatestEnabled` <a name="ResetAutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetAutomaticallyRotateKeyToLatestEnabled"></a>

```go
func ResetAutomaticallyRotateKeyToLatestEnabled()
```

##### `ResetDefaultAccessPolicy` <a name="ResetDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDefaultAccessPolicy"></a>

```go
func ResetDefaultAccessPolicy()
```

##### `ResetDirectoryActiveDirectory` <a name="ResetDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryActiveDirectory"></a>

```go
func ResetDirectoryActiveDirectory()
```

##### `ResetDirectoryFlatFile` <a name="ResetDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryFlatFile"></a>

```go
func ResetDirectoryFlatFile()
```

##### `ResetDirectoryLdap` <a name="ResetDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDirectoryLdap"></a>

```go
func ResetDirectoryLdap()
```

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetDns"></a>

```go
func ResetDns()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetKeyVaultKeyId` <a name="ResetKeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetKeyVaultKeyId"></a>

```go
func ResetKeyVaultKeyId()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetNtpServer` <a name="ResetNtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetNtpServer"></a>

```go
func ResetNtpServer()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.HpcCache_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.HpcCache_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.HpcCache_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCache.HpcCache.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy">DefaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory">DirectoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile">DirectoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap">DirectoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses">MountAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput">AutomaticallyRotateKeyToLatestEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput">CacheSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput">DefaultAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput">DirectoryActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput">DirectoryFlatFileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput">DirectoryLdapInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput">NtpServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput">SkuNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled">AutomaticallyRotateKeyToLatestEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb">CacheSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer">NtpServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName">SkuName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultAccessPolicy`<sup>Required</sup> <a name="DefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicy"></a>

```go
func DefaultAccessPolicy() HpcCacheDefaultAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference">HpcCacheDefaultAccessPolicyOutputReference</a>

---

##### `DirectoryActiveDirectory`<sup>Required</sup> <a name="DirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectory"></a>

```go
func DirectoryActiveDirectory() HpcCacheDirectoryActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference">HpcCacheDirectoryActiveDirectoryOutputReference</a>

---

##### `DirectoryFlatFile`<sup>Required</sup> <a name="DirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFile"></a>

```go
func DirectoryFlatFile() HpcCacheDirectoryFlatFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference">HpcCacheDirectoryFlatFileOutputReference</a>

---

##### `DirectoryLdap`<sup>Required</sup> <a name="DirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdap"></a>

```go
func DirectoryLdap() HpcCacheDirectoryLdapOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference">HpcCacheDirectoryLdapOutputReference</a>

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dns"></a>

```go
func Dns() HpcCacheDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference">HpcCacheDnsOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identity"></a>

```go
func Identity() HpcCacheIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference">HpcCacheIdentityOutputReference</a>

---

##### `MountAddresses`<sup>Required</sup> <a name="MountAddresses" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mountAddresses"></a>

```go
func MountAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeouts"></a>

```go
func Timeouts() HpcCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference">HpcCacheTimeoutsOutputReference</a>

---

##### `AutomaticallyRotateKeyToLatestEnabledInput`<sup>Optional</sup> <a name="AutomaticallyRotateKeyToLatestEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabledInput"></a>

```go
func AutomaticallyRotateKeyToLatestEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheSizeInGbInput`<sup>Optional</sup> <a name="CacheSizeInGbInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGbInput"></a>

```go
func CacheSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `DefaultAccessPolicyInput`<sup>Optional</sup> <a name="DefaultAccessPolicyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.defaultAccessPolicyInput"></a>

```go
func DefaultAccessPolicyInput() HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---

##### `DirectoryActiveDirectoryInput`<sup>Optional</sup> <a name="DirectoryActiveDirectoryInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryActiveDirectoryInput"></a>

```go
func DirectoryActiveDirectoryInput() HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---

##### `DirectoryFlatFileInput`<sup>Optional</sup> <a name="DirectoryFlatFileInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryFlatFileInput"></a>

```go
func DirectoryFlatFileInput() HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---

##### `DirectoryLdapInput`<sup>Optional</sup> <a name="DirectoryLdapInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.directoryLdapInput"></a>

```go
func DirectoryLdapInput() HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.dnsInput"></a>

```go
func DnsInput() HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.identityInput"></a>

```go
func IdentityInput() HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyIdInput"></a>

```go
func KeyVaultKeyIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NtpServerInput`<sup>Optional</sup> <a name="NtpServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServerInput"></a>

```go
func NtpServerInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuNameInput"></a>

```go
func SkuNameInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticallyRotateKeyToLatestEnabled`<sup>Required</sup> <a name="AutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.automaticallyRotateKeyToLatestEnabled"></a>

```go
func AutomaticallyRotateKeyToLatestEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheSizeInGb`<sup>Required</sup> <a name="CacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.cacheSizeInGb"></a>

```go
func CacheSizeInGb() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.keyVaultKeyId"></a>

```go
func KeyVaultKeyId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NtpServer`<sup>Required</sup> <a name="NtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.ntpServer"></a>

```go
func NtpServer() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.skuName"></a>

```go
func SkuName() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.hpcCache.HpcCache.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheConfig <a name="HpcCacheConfig" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CacheSizeInGb: *f64,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	SkuName: *string,
	SubnetId: *string,
	AutomaticallyRotateKeyToLatestEnabled: interface{},
	DefaultAccessPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDefaultAccessPolicy,
	DirectoryActiveDirectory: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDirectoryActiveDirectory,
	DirectoryFlatFile: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDirectoryFlatFile,
	DirectoryLdap: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDirectoryLdap,
	Dns: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDns,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheIdentity,
	KeyVaultKeyId: *string,
	Mtu: *f64,
	NtpServer: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb">CacheSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#location HpcCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#name HpcCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName">SkuName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled">AutomaticallyRotateKeyToLatestEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy">DefaultAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | default_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory">DirectoryActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | directory_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile">DirectoryFlatFile</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | directory_flat_file block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap">DirectoryLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | directory_ldap block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#id HpcCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#mtu HpcCache#mtu}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer">NtpServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#tags HpcCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CacheSizeInGb`<sup>Required</sup> <a name="CacheSizeInGb" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.cacheSizeInGb"></a>

```go
CacheSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#location HpcCache#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#name HpcCache#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#resource_group_name HpcCache#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.skuName"></a>

```go
SkuName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#sku_name HpcCache#sku_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#subnet_id HpcCache#subnet_id}.

---

##### `AutomaticallyRotateKeyToLatestEnabled`<sup>Optional</sup> <a name="AutomaticallyRotateKeyToLatestEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.automaticallyRotateKeyToLatestEnabled"></a>

```go
AutomaticallyRotateKeyToLatestEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#automatically_rotate_key_to_latest_enabled HpcCache#automatically_rotate_key_to_latest_enabled}.

---

##### `DefaultAccessPolicy`<sup>Optional</sup> <a name="DefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.defaultAccessPolicy"></a>

```go
DefaultAccessPolicy HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

default_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#default_access_policy HpcCache#default_access_policy}

---

##### `DirectoryActiveDirectory`<sup>Optional</sup> <a name="DirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryActiveDirectory"></a>

```go
DirectoryActiveDirectory HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

directory_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#directory_active_directory HpcCache#directory_active_directory}

---

##### `DirectoryFlatFile`<sup>Optional</sup> <a name="DirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryFlatFile"></a>

```go
DirectoryFlatFile HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

directory_flat_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#directory_flat_file HpcCache#directory_flat_file}

---

##### `DirectoryLdap`<sup>Optional</sup> <a name="DirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.directoryLdap"></a>

```go
DirectoryLdap HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

directory_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#directory_ldap HpcCache#directory_ldap}

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.dns"></a>

```go
Dns HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dns HpcCache#dns}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#id HpcCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.identity"></a>

```go
Identity HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#identity HpcCache#identity}

---

##### `KeyVaultKeyId`<sup>Optional</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.keyVaultKeyId"></a>

```go
KeyVaultKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#key_vault_key_id HpcCache#key_vault_key_id}.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#mtu HpcCache#mtu}.

---

##### `NtpServer`<sup>Optional</sup> <a name="NtpServer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.ntpServer"></a>

```go
NtpServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#ntp_server HpcCache#ntp_server}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#tags HpcCache#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheConfig.property.timeouts"></a>

```go
Timeouts HpcCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts">HpcCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#timeouts HpcCache#timeouts}

---

### HpcCacheDefaultAccessPolicy <a name="HpcCacheDefaultAccessPolicy" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDefaultAccessPolicy {
	AccessRule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule">AccessRule</a></code> | <code>interface{}</code> | access_rule block. |

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy.property.accessRule"></a>

```go
AccessRule interface{}
```

- *Type:* interface{}

access_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#access_rule HpcCache#access_rule}

---

### HpcCacheDefaultAccessPolicyAccessRule <a name="HpcCacheDefaultAccessPolicyAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDefaultAccessPolicyAccessRule {
	Access: *string,
	Scope: *string,
	AnonymousGid: *f64,
	AnonymousUid: *f64,
	Filter: *string,
	RootSquashEnabled: interface{},
	SubmountAccessEnabled: interface{},
	SuidEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access">Access</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#access HpcCache#access}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#scope HpcCache#scope}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid">AnonymousGid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid">AnonymousUid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#filter HpcCache#filter}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled">SuidEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.access"></a>

```go
Access *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#access HpcCache#access}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#scope HpcCache#scope}.

---

##### `AnonymousGid`<sup>Optional</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousGid"></a>

```go
AnonymousGid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#anonymous_gid HpcCache#anonymous_gid}.

---

##### `AnonymousUid`<sup>Optional</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.anonymousUid"></a>

```go
AnonymousUid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#anonymous_uid HpcCache#anonymous_uid}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#filter HpcCache#filter}.

---

##### `RootSquashEnabled`<sup>Optional</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.rootSquashEnabled"></a>

```go
RootSquashEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}.

---

##### `SubmountAccessEnabled`<sup>Optional</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.submountAccessEnabled"></a>

```go
SubmountAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}.

---

##### `SuidEnabled`<sup>Optional</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRule.property.suidEnabled"></a>

```go
SuidEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#suid_enabled HpcCache#suid_enabled}.

---

### HpcCacheDirectoryActiveDirectory <a name="HpcCacheDirectoryActiveDirectory" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDirectoryActiveDirectory {
	CacheNetbiosName: *string,
	DnsPrimaryIp: *string,
	DomainName: *string,
	DomainNetbiosName: *string,
	Password: *string,
	Username: *string,
	DnsSecondaryIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName">CacheNetbiosName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp">DnsPrimaryIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName">DomainNetbiosName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password HpcCache#password}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#username HpcCache#username}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp">DnsSecondaryIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}. |

---

##### `CacheNetbiosName`<sup>Required</sup> <a name="CacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.cacheNetbiosName"></a>

```go
CacheNetbiosName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}.

---

##### `DnsPrimaryIp`<sup>Required</sup> <a name="DnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsPrimaryIp"></a>

```go
DnsPrimaryIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#domain_name HpcCache#domain_name}.

---

##### `DomainNetbiosName`<sup>Required</sup> <a name="DomainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.domainNetbiosName"></a>

```go
DomainNetbiosName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password HpcCache#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#username HpcCache#username}.

---

##### `DnsSecondaryIp`<sup>Optional</sup> <a name="DnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory.property.dnsSecondaryIp"></a>

```go
DnsSecondaryIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}.

---

### HpcCacheDirectoryFlatFile <a name="HpcCacheDirectoryFlatFile" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDirectoryFlatFile {
	GroupFileUri: *string,
	PasswordFileUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri">GroupFileUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri">PasswordFileUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}. |

---

##### `GroupFileUri`<sup>Required</sup> <a name="GroupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.groupFileUri"></a>

```go
GroupFileUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#group_file_uri HpcCache#group_file_uri}.

---

##### `PasswordFileUri`<sup>Required</sup> <a name="PasswordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile.property.passwordFileUri"></a>

```go
PasswordFileUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password_file_uri HpcCache#password_file_uri}.

---

### HpcCacheDirectoryLdap <a name="HpcCacheDirectoryLdap" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDirectoryLdap {
	BaseDn: *string,
	Server: *string,
	Bind: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.hpcCache.HpcCacheDirectoryLdapBind,
	CertificateValidationUri: *string,
	DownloadCertificateAutomatically: interface{},
	Encrypted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn">BaseDn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#server HpcCache#server}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind">Bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | bind block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri">CertificateValidationUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically">DownloadCertificateAutomatically</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}. |

---

##### `BaseDn`<sup>Required</sup> <a name="BaseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.baseDn"></a>

```go
BaseDn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#base_dn HpcCache#base_dn}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#server HpcCache#server}.

---

##### `Bind`<sup>Optional</sup> <a name="Bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.bind"></a>

```go
Bind HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

bind block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#bind HpcCache#bind}

---

##### `CertificateValidationUri`<sup>Optional</sup> <a name="CertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.certificateValidationUri"></a>

```go
CertificateValidationUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}.

---

##### `DownloadCertificateAutomatically`<sup>Optional</sup> <a name="DownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.downloadCertificateAutomatically"></a>

```go
DownloadCertificateAutomatically interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#encrypted HpcCache#encrypted}.

---

### HpcCacheDirectoryLdapBind <a name="HpcCacheDirectoryLdapBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDirectoryLdapBind {
	Dn: *string,
	Password: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn">Dn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dn HpcCache#dn}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password HpcCache#password}. |

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.dn"></a>

```go
Dn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#dn HpcCache#dn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#password HpcCache#password}.

---

### HpcCacheDns <a name="HpcCacheDns" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheDns {
	Servers: *[]*string,
	SearchDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers">Servers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#servers HpcCache#servers}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain">SearchDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}. |

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.servers"></a>

```go
Servers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#servers HpcCache#servers}.

---

##### `SearchDomain`<sup>Optional</sup> <a name="SearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDns.property.searchDomain"></a>

```go
SearchDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#search_domain HpcCache#search_domain}.

---

### HpcCacheIdentity <a name="HpcCacheIdentity" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#type HpcCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#type HpcCache#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#identity_ids HpcCache#identity_ids}.

---

### HpcCacheTimeouts <a name="HpcCacheTimeouts" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

&hpccache.HpcCacheTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#create HpcCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#delete HpcCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#read HpcCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#update HpcCache#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#create HpcCache#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#delete HpcCache#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#read HpcCache#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/hpc_cache#update HpcCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheDefaultAccessPolicyAccessRuleList <a name="HpcCacheDefaultAccessPolicyAccessRuleList" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDefaultAccessPolicyAccessRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HpcCacheDefaultAccessPolicyAccessRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get"></a>

```go
func Get(index *f64) HpcCacheDefaultAccessPolicyAccessRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HpcCacheDefaultAccessPolicyAccessRuleOutputReference <a name="HpcCacheDefaultAccessPolicyAccessRuleOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDefaultAccessPolicyAccessRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HpcCacheDefaultAccessPolicyAccessRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid">ResetAnonymousGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid">ResetAnonymousUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled">ResetRootSquashEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled">ResetSubmountAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled">ResetSuidEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnonymousGid` <a name="ResetAnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousGid"></a>

```go
func ResetAnonymousGid()
```

##### `ResetAnonymousUid` <a name="ResetAnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetAnonymousUid"></a>

```go
func ResetAnonymousUid()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRootSquashEnabled` <a name="ResetRootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetRootSquashEnabled"></a>

```go
func ResetRootSquashEnabled()
```

##### `ResetSubmountAccessEnabled` <a name="ResetSubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSubmountAccessEnabled"></a>

```go
func ResetSubmountAccessEnabled()
```

##### `ResetSuidEnabled` <a name="ResetSuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.resetSuidEnabled"></a>

```go
func ResetSuidEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput">AnonymousGidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput">AnonymousUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput">RootSquashEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput">SubmountAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput">SuidEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid">AnonymousGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid">AnonymousUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled">RootSquashEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled">SubmountAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled">SuidEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `AnonymousGidInput`<sup>Optional</sup> <a name="AnonymousGidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGidInput"></a>

```go
func AnonymousGidInput() *f64
```

- *Type:* *f64

---

##### `AnonymousUidInput`<sup>Optional</sup> <a name="AnonymousUidInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUidInput"></a>

```go
func AnonymousUidInput() *f64
```

- *Type:* *f64

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `RootSquashEnabledInput`<sup>Optional</sup> <a name="RootSquashEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabledInput"></a>

```go
func RootSquashEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SubmountAccessEnabledInput`<sup>Optional</sup> <a name="SubmountAccessEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabledInput"></a>

```go
func SubmountAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SuidEnabledInput`<sup>Optional</sup> <a name="SuidEnabledInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabledInput"></a>

```go
func SuidEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `AnonymousGid`<sup>Required</sup> <a name="AnonymousGid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousGid"></a>

```go
func AnonymousGid() *f64
```

- *Type:* *f64

---

##### `AnonymousUid`<sup>Required</sup> <a name="AnonymousUid" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.anonymousUid"></a>

```go
func AnonymousUid() *f64
```

- *Type:* *f64

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `RootSquashEnabled`<sup>Required</sup> <a name="RootSquashEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.rootSquashEnabled"></a>

```go
func RootSquashEnabled() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SubmountAccessEnabled`<sup>Required</sup> <a name="SubmountAccessEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.submountAccessEnabled"></a>

```go
func SubmountAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `SuidEnabled`<sup>Required</sup> <a name="SuidEnabled" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.suidEnabled"></a>

```go
func SuidEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HpcCacheDefaultAccessPolicyOutputReference <a name="HpcCacheDefaultAccessPolicyOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDefaultAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDefaultAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule">PutAccessRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRule` <a name="PutAccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule"></a>

```go
func PutAccessRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.putAccessRule.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule">AccessRule</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput">AccessRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRule`<sup>Required</sup> <a name="AccessRule" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRule"></a>

```go
func AccessRule() HpcCacheDefaultAccessPolicyAccessRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyAccessRuleList">HpcCacheDefaultAccessPolicyAccessRuleList</a>

---

##### `AccessRuleInput`<sup>Optional</sup> <a name="AccessRuleInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.accessRuleInput"></a>

```go
func AccessRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDefaultAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDefaultAccessPolicy">HpcCacheDefaultAccessPolicy</a>

---


### HpcCacheDirectoryActiveDirectoryOutputReference <a name="HpcCacheDirectoryActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDirectoryActiveDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDirectoryActiveDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp">ResetDnsSecondaryIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsSecondaryIp` <a name="ResetDnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.resetDnsSecondaryIp"></a>

```go
func ResetDnsSecondaryIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput">CacheNetbiosNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput">DnsPrimaryIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput">DnsSecondaryIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput">DomainNetbiosNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName">CacheNetbiosName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp">DnsPrimaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp">DnsSecondaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName">DomainNetbiosName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheNetbiosNameInput`<sup>Optional</sup> <a name="CacheNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosNameInput"></a>

```go
func CacheNetbiosNameInput() *string
```

- *Type:* *string

---

##### `DnsPrimaryIpInput`<sup>Optional</sup> <a name="DnsPrimaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIpInput"></a>

```go
func DnsPrimaryIpInput() *string
```

- *Type:* *string

---

##### `DnsSecondaryIpInput`<sup>Optional</sup> <a name="DnsSecondaryIpInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIpInput"></a>

```go
func DnsSecondaryIpInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DomainNetbiosNameInput`<sup>Optional</sup> <a name="DomainNetbiosNameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosNameInput"></a>

```go
func DomainNetbiosNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `CacheNetbiosName`<sup>Required</sup> <a name="CacheNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.cacheNetbiosName"></a>

```go
func CacheNetbiosName() *string
```

- *Type:* *string

---

##### `DnsPrimaryIp`<sup>Required</sup> <a name="DnsPrimaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsPrimaryIp"></a>

```go
func DnsPrimaryIp() *string
```

- *Type:* *string

---

##### `DnsSecondaryIp`<sup>Required</sup> <a name="DnsSecondaryIp" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.dnsSecondaryIp"></a>

```go
func DnsSecondaryIp() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainNetbiosName`<sup>Required</sup> <a name="DomainNetbiosName" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.domainNetbiosName"></a>

```go
func DomainNetbiosName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDirectoryActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryActiveDirectory">HpcCacheDirectoryActiveDirectory</a>

---


### HpcCacheDirectoryFlatFileOutputReference <a name="HpcCacheDirectoryFlatFileOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDirectoryFlatFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDirectoryFlatFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput">GroupFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput">PasswordFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri">GroupFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri">PasswordFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupFileUriInput`<sup>Optional</sup> <a name="GroupFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUriInput"></a>

```go
func GroupFileUriInput() *string
```

- *Type:* *string

---

##### `PasswordFileUriInput`<sup>Optional</sup> <a name="PasswordFileUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUriInput"></a>

```go
func PasswordFileUriInput() *string
```

- *Type:* *string

---

##### `GroupFileUri`<sup>Required</sup> <a name="GroupFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.groupFileUri"></a>

```go
func GroupFileUri() *string
```

- *Type:* *string

---

##### `PasswordFileUri`<sup>Required</sup> <a name="PasswordFileUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.passwordFileUri"></a>

```go
func PasswordFileUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFileOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDirectoryFlatFile
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryFlatFile">HpcCacheDirectoryFlatFile</a>

---


### HpcCacheDirectoryLdapBindOutputReference <a name="HpcCacheDirectoryLdapBindOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDirectoryLdapBindOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDirectoryLdapBindOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput">DnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn">Dn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnInput`<sup>Optional</sup> <a name="DnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dnInput"></a>

```go
func DnInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `Dn`<sup>Required</sup> <a name="Dn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.dn"></a>

```go
func Dn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---


### HpcCacheDirectoryLdapOutputReference <a name="HpcCacheDirectoryLdapOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDirectoryLdapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDirectoryLdapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind">PutBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind">ResetBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri">ResetCertificateValidationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically">ResetDownloadCertificateAutomatically</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBind` <a name="PutBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind"></a>

```go
func PutBind(value HpcCacheDirectoryLdapBind)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.putBind.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `ResetBind` <a name="ResetBind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetBind"></a>

```go
func ResetBind()
```

##### `ResetCertificateValidationUri` <a name="ResetCertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetCertificateValidationUri"></a>

```go
func ResetCertificateValidationUri()
```

##### `ResetDownloadCertificateAutomatically` <a name="ResetDownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetDownloadCertificateAutomatically"></a>

```go
func ResetDownloadCertificateAutomatically()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind">Bind</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput">BaseDnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput">BindInput</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput">CertificateValidationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput">DownloadCertificateAutomaticallyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn">BaseDn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri">CertificateValidationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically">DownloadCertificateAutomatically</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bind`<sup>Required</sup> <a name="Bind" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bind"></a>

```go
func Bind() HpcCacheDirectoryLdapBindOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBindOutputReference">HpcCacheDirectoryLdapBindOutputReference</a>

---

##### `BaseDnInput`<sup>Optional</sup> <a name="BaseDnInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDnInput"></a>

```go
func BaseDnInput() *string
```

- *Type:* *string

---

##### `BindInput`<sup>Optional</sup> <a name="BindInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.bindInput"></a>

```go
func BindInput() HpcCacheDirectoryLdapBind
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapBind">HpcCacheDirectoryLdapBind</a>

---

##### `CertificateValidationUriInput`<sup>Optional</sup> <a name="CertificateValidationUriInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUriInput"></a>

```go
func CertificateValidationUriInput() *string
```

- *Type:* *string

---

##### `DownloadCertificateAutomaticallyInput`<sup>Optional</sup> <a name="DownloadCertificateAutomaticallyInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomaticallyInput"></a>

```go
func DownloadCertificateAutomaticallyInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `BaseDn`<sup>Required</sup> <a name="BaseDn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.baseDn"></a>

```go
func BaseDn() *string
```

- *Type:* *string

---

##### `CertificateValidationUri`<sup>Required</sup> <a name="CertificateValidationUri" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.certificateValidationUri"></a>

```go
func CertificateValidationUri() *string
```

- *Type:* *string

---

##### `DownloadCertificateAutomatically`<sup>Required</sup> <a name="DownloadCertificateAutomatically" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.downloadCertificateAutomatically"></a>

```go
func DownloadCertificateAutomatically() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdapOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDirectoryLdap
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDirectoryLdap">HpcCacheDirectoryLdap</a>

---


### HpcCacheDnsOutputReference <a name="HpcCacheDnsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain">ResetSearchDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSearchDomain` <a name="ResetSearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.resetSearchDomain"></a>

```go
func ResetSearchDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput">SearchDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput">ServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain">SearchDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SearchDomainInput`<sup>Optional</sup> <a name="SearchDomainInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomainInput"></a>

```go
func SearchDomainInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.serversInput"></a>

```go
func ServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomain`<sup>Required</sup> <a name="SearchDomain" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.searchDomain"></a>

```go
func SearchDomain() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheDns
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheDns">HpcCacheDns</a>

---


### HpcCacheIdentityOutputReference <a name="HpcCacheIdentityOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() HpcCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheIdentity">HpcCacheIdentity</a>

---


### HpcCacheTimeoutsOutputReference <a name="HpcCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/hpccache"

hpccache.NewHpcCacheTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HpcCacheTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.hpcCache.HpcCacheTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



