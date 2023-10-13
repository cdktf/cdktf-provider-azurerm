# `azurerm_storage_account_customer_managed_key`

Refer to the Terraform Registory for docs: [`azurerm_storage_account_customer_managed_key`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key).

# `storageAccountCustomerManagedKey` Submodule <a name="`storageAccountCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountCustomerManagedKeyA <a name="StorageAccountCustomerManagedKeyA" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key azurerm_storage_account_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

new storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA(scope: Construct, id: string, config: StorageAccountCustomerManagedKeyAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig">StorageAccountCustomerManagedKeyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId">resetFederatedIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultUri">resetKeyVaultUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountCustomerManagedKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---

##### `resetFederatedIdentityClientId` <a name="resetFederatedIdentityClientId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetFederatedIdentityClientId"></a>

```typescript
public resetFederatedIdentityClientId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetKeyVaultUri` <a name="resetKeyVaultUri" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVaultUri"></a>

```typescript
public resetKeyVaultUri(): void
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput">federatedIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUriInput">keyVaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersionInput">keyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId">federatedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUri">keyVaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersion">keyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountCustomerManagedKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference">StorageAccountCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `federatedIdentityClientIdInput`<sup>Optional</sup> <a name="federatedIdentityClientIdInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientIdInput"></a>

```typescript
public readonly federatedIdentityClientIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVaultUriInput`<sup>Optional</sup> <a name="keyVaultUriInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUriInput"></a>

```typescript
public readonly keyVaultUriInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `federatedIdentityClientId`<sup>Required</sup> <a name="federatedIdentityClientId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.federatedIdentityClientId"></a>

```typescript
public readonly federatedIdentityClientId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVaultUri`<sup>Required</sup> <a name="keyVaultUri" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVaultUri"></a>

```typescript
public readonly keyVaultUri: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountCustomerManagedKeyAConfig <a name="StorageAccountCustomerManagedKeyAConfig" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.Initializer"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

const storageAccountCustomerManagedKeyAConfig: storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_name StorageAccountCustomerManagedKeyA#key_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId">federatedIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_vault_id StorageAccountCustomerManagedKeyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultUri">keyVaultUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_vault_uri StorageAccountCustomerManagedKeyA#key_vault_uri}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVersion">keyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_version StorageAccountCustomerManagedKeyA#key_version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_name StorageAccountCustomerManagedKeyA#key_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#storage_account_id StorageAccountCustomerManagedKeyA#storage_account_id}.

---

##### `federatedIdentityClientId`<sup>Optional</sup> <a name="federatedIdentityClientId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.federatedIdentityClientId"></a>

```typescript
public readonly federatedIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#federated_identity_client_id StorageAccountCustomerManagedKeyA#federated_identity_client_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#id StorageAccountCustomerManagedKeyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_vault_id StorageAccountCustomerManagedKeyA#key_vault_id}.

---

##### `keyVaultUri`<sup>Optional</sup> <a name="keyVaultUri" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVaultUri"></a>

```typescript
public readonly keyVaultUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_vault_uri StorageAccountCustomerManagedKeyA#key_vault_uri}.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#key_version StorageAccountCustomerManagedKeyA#key_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountCustomerManagedKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#timeouts StorageAccountCustomerManagedKeyA#timeouts}

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyAConfig.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#user_assigned_identity_id StorageAccountCustomerManagedKeyA#user_assigned_identity_id}.

---

### StorageAccountCustomerManagedKeyTimeouts <a name="StorageAccountCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.Initializer"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

const storageAccountCustomerManagedKeyTimeouts: storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#create StorageAccountCustomerManagedKeyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#delete StorageAccountCustomerManagedKeyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#read StorageAccountCustomerManagedKeyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/storage_account_customer_managed_key#update StorageAccountCustomerManagedKeyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountCustomerManagedKeyTimeoutsOutputReference <a name="StorageAccountCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageAccountCustomerManagedKey } from '@cdktf/provider-azurerm'

new storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageAccountCustomerManagedKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.storageAccountCustomerManagedKey.StorageAccountCustomerManagedKeyTimeouts">StorageAccountCustomerManagedKeyTimeouts</a>

---



