# `azurerm_key_vault_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_key_vault_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy).

# `keyVaultAccessPolicy` Submodule <a name="`keyVaultAccessPolicy` Submodule" id="@cdktf/provider-azurerm.keyVaultAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultAccessPolicyA <a name="KeyVaultAccessPolicyA" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy azurerm_key_vault_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

new keyVaultAccessPolicy.KeyVaultAccessPolicyA(scope: Construct, id: string, config: KeyVaultAccessPolicyAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig">KeyVaultAccessPolicyAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig">KeyVaultAccessPolicyAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions">resetCertificatePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions">resetKeyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions">resetSecretPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions">resetStoragePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

---

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetCertificatePermissions` <a name="resetCertificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetCertificatePermissions"></a>

```typescript
public resetCertificatePermissions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyPermissions` <a name="resetKeyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetKeyPermissions"></a>

```typescript
public resetKeyPermissions(): void
```

##### `resetSecretPermissions` <a name="resetSecretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetSecretPermissions"></a>

```typescript
public resetSecretPermissions(): void
```

##### `resetStoragePermissions` <a name="resetStoragePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetStoragePermissions"></a>

```typescript
public resetStoragePermissions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput">certificatePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput">keyPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput">secretPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput">storagePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions">certificatePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions">keyPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions">secretPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions">storagePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference">KeyVaultAccessPolicyTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `certificatePermissionsInput`<sup>Optional</sup> <a name="certificatePermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissionsInput"></a>

```typescript
public readonly certificatePermissionsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyPermissionsInput`<sup>Optional</sup> <a name="keyPermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissionsInput"></a>

```typescript
public readonly keyPermissionsInput: string[];
```

- *Type:* string[]

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `secretPermissionsInput`<sup>Optional</sup> <a name="secretPermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissionsInput"></a>

```typescript
public readonly secretPermissionsInput: string[];
```

- *Type:* string[]

---

##### `storagePermissionsInput`<sup>Optional</sup> <a name="storagePermissionsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissionsInput"></a>

```typescript
public readonly storagePermissionsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KeyVaultAccessPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a> | cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `certificatePermissions`<sup>Required</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.certificatePermissions"></a>

```typescript
public readonly certificatePermissions: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyPermissions`<sup>Required</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyPermissions"></a>

```typescript
public readonly keyPermissions: string[];
```

- *Type:* string[]

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `secretPermissions`<sup>Required</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.secretPermissions"></a>

```typescript
public readonly secretPermissions: string[];
```

- *Type:* string[]

---

##### `storagePermissions`<sup>Required</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.storagePermissions"></a>

```typescript
public readonly storagePermissions: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultAccessPolicyAConfig <a name="KeyVaultAccessPolicyAConfig" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.Initializer"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

const keyVaultAccessPolicyAConfig: keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions">certificatePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions">keyPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions">secretPermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions">storagePermissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#key_vault_id KeyVaultAccessPolicyA#key_vault_id}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#object_id KeyVaultAccessPolicyA#object_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#tenant_id KeyVaultAccessPolicyA#tenant_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#application_id KeyVaultAccessPolicyA#application_id}.

---

##### `certificatePermissions`<sup>Optional</sup> <a name="certificatePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.certificatePermissions"></a>

```typescript
public readonly certificatePermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#id KeyVaultAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyPermissions`<sup>Optional</sup> <a name="keyPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.keyPermissions"></a>

```typescript
public readonly keyPermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#key_permissions KeyVaultAccessPolicyA#key_permissions}.

---

##### `secretPermissions`<sup>Optional</sup> <a name="secretPermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.secretPermissions"></a>

```typescript
public readonly secretPermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#secret_permissions KeyVaultAccessPolicyA#secret_permissions}.

---

##### `storagePermissions`<sup>Optional</sup> <a name="storagePermissions" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.storagePermissions"></a>

```typescript
public readonly storagePermissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#storage_permissions KeyVaultAccessPolicyA#storage_permissions}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyAConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#timeouts KeyVaultAccessPolicyA#timeouts}

---

### KeyVaultAccessPolicyTimeouts <a name="KeyVaultAccessPolicyTimeouts" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.Initializer"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

const keyVaultAccessPolicyTimeouts: keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#create KeyVaultAccessPolicyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#delete KeyVaultAccessPolicyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#read KeyVaultAccessPolicyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/key_vault_access_policy#update KeyVaultAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultAccessPolicyTimeoutsOutputReference <a name="KeyVaultAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultAccessPolicy } from '@cdktf/provider-azurerm'

new keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyVaultAccessPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultAccessPolicy.KeyVaultAccessPolicyTimeouts">KeyVaultAccessPolicyTimeouts</a> | cdktf.IResolvable

---



