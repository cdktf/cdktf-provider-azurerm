# `azurerm_logic_app_integration_account_certificate`

Refer to the Terraform Registory for docs: [`azurerm_logic_app_integration_account_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate).

# `logicAppIntegrationAccountCertificate` Submodule <a name="`logicAppIntegrationAccountCertificate` Submodule" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountCertificate <a name="LogicAppIntegrationAccountCertificate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate azurerm_logic_app_integration_account_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate(scope: Construct, id: string, config: LogicAppIntegrationAccountCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig">LogicAppIntegrationAccountCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig">LogicAppIntegrationAccountCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putKeyVaultKey">putKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetKeyVaultKey">resetKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetPublicCertificate">resetPublicCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putKeyVaultKey` <a name="putKeyVaultKey" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putKeyVaultKey"></a>

```typescript
public putKeyVaultKey(value: LogicAppIntegrationAccountCertificateKeyVaultKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: LogicAppIntegrationAccountCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultKey` <a name="resetKeyVaultKey" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetKeyVaultKey"></a>

```typescript
public resetKeyVaultKey(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPublicCertificate` <a name="resetPublicCertificate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetPublicCertificate"></a>

```typescript
public resetPublicCertificate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isConstruct"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformElement"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformResource"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.keyVaultKey">keyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference">LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference">LogicAppIntegrationAccountCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.integrationAccountNameInput">integrationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.keyVaultKeyInput">keyVaultKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.publicCertificateInput">publicCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultKey`<sup>Required</sup> <a name="keyVaultKey" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.keyVaultKey"></a>

```typescript
public readonly keyVaultKey: LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference">LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference">LogicAppIntegrationAccountCertificateTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationAccountNameInput`<sup>Optional</sup> <a name="integrationAccountNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.integrationAccountNameInput"></a>

```typescript
public readonly integrationAccountNameInput: string;
```

- *Type:* string

---

##### `keyVaultKeyInput`<sup>Optional</sup> <a name="keyVaultKeyInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.keyVaultKeyInput"></a>

```typescript
public readonly keyVaultKeyInput: LogicAppIntegrationAccountCertificateKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicCertificateInput`<sup>Optional</sup> <a name="publicCertificateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.publicCertificateInput"></a>

```typescript
public readonly publicCertificateInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LogicAppIntegrationAccountCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicCertificate`<sup>Required</sup> <a name="publicCertificate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountCertificateConfig <a name="LogicAppIntegrationAccountCertificateConfig" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountCertificateConfig: logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.integrationAccountName">integrationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#integration_account_name LogicAppIntegrationAccountCertificate#integration_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#name LogicAppIntegrationAccountCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#resource_group_name LogicAppIntegrationAccountCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#id LogicAppIntegrationAccountCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.keyVaultKey">keyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a></code> | key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.metadata">metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#metadata LogicAppIntegrationAccountCertificate#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.publicCertificate">publicCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#public_certificate LogicAppIntegrationAccountCertificate#public_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `integrationAccountName`<sup>Required</sup> <a name="integrationAccountName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.integrationAccountName"></a>

```typescript
public readonly integrationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#integration_account_name LogicAppIntegrationAccountCertificate#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#name LogicAppIntegrationAccountCertificate#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#resource_group_name LogicAppIntegrationAccountCertificate#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#id LogicAppIntegrationAccountCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultKey`<sup>Optional</sup> <a name="keyVaultKey" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.keyVaultKey"></a>

```typescript
public readonly keyVaultKey: LogicAppIntegrationAccountCertificateKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a>

key_vault_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_vault_key LogicAppIntegrationAccountCertificate#key_vault_key}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#metadata LogicAppIntegrationAccountCertificate#metadata}.

---

##### `publicCertificate`<sup>Optional</sup> <a name="publicCertificate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.publicCertificate"></a>

```typescript
public readonly publicCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#public_certificate LogicAppIntegrationAccountCertificate#public_certificate}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LogicAppIntegrationAccountCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#timeouts LogicAppIntegrationAccountCertificate#timeouts}

---

### LogicAppIntegrationAccountCertificateKeyVaultKey <a name="LogicAppIntegrationAccountCertificateKeyVaultKey" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountCertificateKeyVaultKey: logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_name LogicAppIntegrationAccountCertificate#key_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_vault_id LogicAppIntegrationAccountCertificate#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyVersion">keyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_version LogicAppIntegrationAccountCertificate#key_version}. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_name LogicAppIntegrationAccountCertificate#key_name}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_vault_id LogicAppIntegrationAccountCertificate#key_vault_id}.

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#key_version LogicAppIntegrationAccountCertificate#key_version}.

---

### LogicAppIntegrationAccountCertificateTimeouts <a name="LogicAppIntegrationAccountCertificateTimeouts" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

const logicAppIntegrationAccountCertificateTimeouts: logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#create LogicAppIntegrationAccountCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#delete LogicAppIntegrationAccountCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#read LogicAppIntegrationAccountCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#update LogicAppIntegrationAccountCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#create LogicAppIntegrationAccountCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#delete LogicAppIntegrationAccountCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#read LogicAppIntegrationAccountCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.67.0/docs/resources/logic_app_integration_account_certificate#update LogicAppIntegrationAccountCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference <a name="LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVersion">keyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LogicAppIntegrationAccountCertificateKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateKeyVaultKey">LogicAppIntegrationAccountCertificateKeyVaultKey</a>

---


### LogicAppIntegrationAccountCertificateTimeoutsOutputReference <a name="LogicAppIntegrationAccountCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { logicAppIntegrationAccountCertificate } from '@cdktf/provider-azurerm'

new logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogicAppIntegrationAccountCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.logicAppIntegrationAccountCertificate.LogicAppIntegrationAccountCertificateTimeouts">LogicAppIntegrationAccountCertificateTimeouts</a>

---



