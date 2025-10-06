# `aiServices` Submodule <a name="`aiServices` Submodule" id="@cdktf/provider-azurerm.aiServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiServices <a name="AiServices" id="@cdktf/provider-azurerm.aiServices.AiServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services azurerm_ai_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServices.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServices(scope: Construct, id: string, config: AiServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig">AiServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.aiServices.AiServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig">AiServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.putNetworkAcls">putNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetCustomSubdomainName">resetCustomSubdomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetLocalAuthenticationEnabled">resetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetNetworkAcls">resetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetOutboundNetworkAccessRestricted">resetOutboundNetworkAccessRestricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.aiServices.AiServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.aiServices.AiServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.aiServices.AiServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.aiServices.AiServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.aiServices.AiServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.aiServices.AiServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.aiServices.AiServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.aiServices.AiServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.aiServices.AiServices.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.aiServices.AiServices.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.aiServices.AiServices.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.aiServices.AiServices.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServices.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiServices.AiServices.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.aiServices.AiServices.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServices.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.aiServices.AiServices.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.aiServices.AiServices.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.aiServices.AiServices.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.aiServices.AiServices.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServices.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.aiServices.AiServices.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: AiServicesCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.aiServices.AiServices.putIdentity"></a>

```typescript
public putIdentity(value: AiServicesIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a>

---

##### `putNetworkAcls` <a name="putNetworkAcls" id="@cdktf/provider-azurerm.aiServices.AiServices.putNetworkAcls"></a>

```typescript
public putNetworkAcls(value: AiServicesNetworkAcls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-azurerm.aiServices.AiServices.putStorage"></a>

```typescript
public putStorage(value: IResolvable | AiServicesStorage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.putStorage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.aiServices.AiServices.putTimeouts"></a>

```typescript
public putTimeouts(value: AiServicesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServices.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a>

---

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.aiServices.AiServices.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetCustomSubdomainName` <a name="resetCustomSubdomainName" id="@cdktf/provider-azurerm.aiServices.AiServices.resetCustomSubdomainName"></a>

```typescript
public resetCustomSubdomainName(): void
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktf/provider-azurerm.aiServices.AiServices.resetFqdns"></a>

```typescript
public resetFqdns(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.aiServices.AiServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.aiServices.AiServices.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLocalAuthenticationEnabled` <a name="resetLocalAuthenticationEnabled" id="@cdktf/provider-azurerm.aiServices.AiServices.resetLocalAuthenticationEnabled"></a>

```typescript
public resetLocalAuthenticationEnabled(): void
```

##### `resetNetworkAcls` <a name="resetNetworkAcls" id="@cdktf/provider-azurerm.aiServices.AiServices.resetNetworkAcls"></a>

```typescript
public resetNetworkAcls(): void
```

##### `resetOutboundNetworkAccessRestricted` <a name="resetOutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.aiServices.AiServices.resetOutboundNetworkAccessRestricted"></a>

```typescript
public resetOutboundNetworkAccessRestricted(): void
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktf/provider-azurerm.aiServices.AiServices.resetPublicNetworkAccess"></a>

```typescript
public resetPublicNetworkAccess(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-azurerm.aiServices.AiServices.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.aiServices.AiServices.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.aiServices.AiServices.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.aiServices.AiServices.isConstruct"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

aiServices.AiServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiServices.AiServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.aiServices.AiServices.isTerraformElement"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

aiServices.AiServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiServices.AiServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.aiServices.AiServices.isTerraformResource"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

aiServices.AiServices.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiServices.AiServices.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

aiServices.AiServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AiServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiServices.AiServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference">AiServicesCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference">AiServicesIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference">AiServicesNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList">AiServicesStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference">AiServicesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.customSubdomainNameInput">customSubdomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.fqdnsInput">fqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.localAuthenticationEnabledInput">localAuthenticationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.networkAclsInput">networkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.outboundNetworkAccessRestrictedInput">outboundNetworkAccessRestrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.storageInput">storageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.customSubdomainName">customSubdomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.aiServices.AiServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.aiServices.AiServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.aiServices.AiServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.aiServices.AiServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.aiServices.AiServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.aiServices.AiServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aiServices.AiServices.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aiServices.AiServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.aiServices.AiServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.aiServices.AiServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aiServices.AiServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiServices.AiServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aiServices.AiServices.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.aiServices.AiServices.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: AiServicesCustomerManagedKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference">AiServicesCustomerManagedKeyOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.aiServices.AiServices.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.aiServices.AiServices.property.identity"></a>

```typescript
public readonly identity: AiServicesIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference">AiServicesIdentityOutputReference</a>

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.aiServices.AiServices.property.networkAcls"></a>

```typescript
public readonly networkAcls: AiServicesNetworkAclsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference">AiServicesNetworkAclsOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.aiServices.AiServices.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.aiServices.AiServices.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.aiServices.AiServices.property.storage"></a>

```typescript
public readonly storage: AiServicesStorageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList">AiServicesStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aiServices.AiServices.property.timeouts"></a>

```typescript
public readonly timeouts: AiServicesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference">AiServicesTimeoutsOutputReference</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: AiServicesCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a>

---

##### `customSubdomainNameInput`<sup>Optional</sup> <a name="customSubdomainNameInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.customSubdomainNameInput"></a>

```typescript
public readonly customSubdomainNameInput: string;
```

- *Type:* string

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.fqdnsInput"></a>

```typescript
public readonly fqdnsInput: string[];
```

- *Type:* string[]

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.identityInput"></a>

```typescript
public readonly identityInput: AiServicesIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localAuthenticationEnabledInput`<sup>Optional</sup> <a name="localAuthenticationEnabledInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.localAuthenticationEnabledInput"></a>

```typescript
public readonly localAuthenticationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkAclsInput`<sup>Optional</sup> <a name="networkAclsInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.networkAclsInput"></a>

```typescript
public readonly networkAclsInput: AiServicesNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a>

---

##### `outboundNetworkAccessRestrictedInput`<sup>Optional</sup> <a name="outboundNetworkAccessRestrictedInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.outboundNetworkAccessRestrictedInput"></a>

```typescript
public readonly outboundNetworkAccessRestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.publicNetworkAccessInput"></a>

```typescript
public readonly publicNetworkAccessInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.storageInput"></a>

```typescript
public readonly storageInput: IResolvable | AiServicesStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.aiServices.AiServices.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AiServicesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a>

---

##### `customSubdomainName`<sup>Required</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.aiServices.AiServices.property.customSubdomainName"></a>

```typescript
public readonly customSubdomainName: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.aiServices.AiServices.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthenticationEnabled`<sup>Required</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.aiServices.AiServices.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.aiServices.AiServices.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.aiServices.AiServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outboundNetworkAccessRestricted`<sup>Required</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.aiServices.AiServices.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.aiServices.AiServices.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.aiServices.AiServices.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.aiServices.AiServices.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.aiServices.AiServices.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.aiServices.AiServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiServicesConfig <a name="AiServicesConfig" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesConfig: aiServices.AiServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#location AiServices#location}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#name AiServices#name}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#resource_group_name AiServices#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#sku_name AiServices#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.customSubdomainName">customSubdomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#custom_subdomain_name AiServices#custom_subdomain_name}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.fqdns">fqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#fqdns AiServices#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#id AiServices#id}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.localAuthenticationEnabled">localAuthenticationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#local_authentication_enabled AiServices#local_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#outbound_network_access_restricted AiServices#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#public_network_access AiServices#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.storage">storage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]</code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#tags AiServices#tags}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#location AiServices#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#name AiServices#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#resource_group_name AiServices#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#sku_name AiServices#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: AiServicesCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#customer_managed_key AiServices#customer_managed_key}

---

##### `customSubdomainName`<sup>Optional</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.customSubdomainName"></a>

```typescript
public readonly customSubdomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#custom_subdomain_name AiServices#custom_subdomain_name}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#fqdns AiServices#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#id AiServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.identity"></a>

```typescript
public readonly identity: AiServicesIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity AiServices#identity}

---

##### `localAuthenticationEnabled`<sup>Optional</sup> <a name="localAuthenticationEnabled" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.localAuthenticationEnabled"></a>

```typescript
public readonly localAuthenticationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#local_authentication_enabled AiServices#local_authentication_enabled}.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.networkAcls"></a>

```typescript
public readonly networkAcls: AiServicesNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#network_acls AiServices#network_acls}

---

##### `outboundNetworkAccessRestricted`<sup>Optional</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.outboundNetworkAccessRestricted"></a>

```typescript
public readonly outboundNetworkAccessRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#outbound_network_access_restricted AiServices#outbound_network_access_restricted}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#public_network_access AiServices#public_network_access}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.storage"></a>

```typescript
public readonly storage: IResolvable | AiServicesStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#storage AiServices#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#tags AiServices#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aiServices.AiServicesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AiServicesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#timeouts AiServices#timeouts}

---

### AiServicesCustomerManagedKey <a name="AiServicesCustomerManagedKey" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesCustomerManagedKey: aiServices.AiServicesCustomerManagedKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.identityClientId">identityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_client_id AiServices#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#key_vault_key_id AiServices#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#managed_hsm_key_id AiServices#managed_hsm_key_id}. |

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_client_id AiServices#identity_client_id}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#key_vault_key_id AiServices#key_vault_key_id}.

---

##### `managedHsmKeyId`<sup>Optional</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#managed_hsm_key_id AiServices#managed_hsm_key_id}.

---

### AiServicesIdentity <a name="AiServicesIdentity" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentity.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesIdentity: aiServices.AiServicesIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#type AiServices#type}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_ids AiServices#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#type AiServices#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_ids AiServices#identity_ids}.

---

### AiServicesNetworkAcls <a name="AiServicesNetworkAcls" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesNetworkAcls: aiServices.AiServicesNetworkAcls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#default_action AiServices#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.bypass">bypass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#bypass AiServices#bypass}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.ipRules">ipRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#ip_rules AiServices#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]</code> | virtual_network_rules block. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#default_action AiServices#default_action}.

---

##### `bypass`<sup>Optional</sup> <a name="bypass" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#bypass AiServices#bypass}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#ip_rules AiServices#ip_rules}.

---

##### `virtualNetworkRules`<sup>Optional</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls.property.virtualNetworkRules"></a>

```typescript
public readonly virtualNetworkRules: IResolvable | AiServicesNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]

virtual_network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#virtual_network_rules AiServices#virtual_network_rules}

---

### AiServicesNetworkAclsVirtualNetworkRules <a name="AiServicesNetworkAclsVirtualNetworkRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesNetworkAclsVirtualNetworkRules: aiServices.AiServicesNetworkAclsVirtualNetworkRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#subnet_id AiServices#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#ignore_missing_vnet_service_endpoint AiServices#ignore_missing_vnet_service_endpoint}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#subnet_id AiServices#subnet_id}.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#ignore_missing_vnet_service_endpoint AiServices#ignore_missing_vnet_service_endpoint}.

---

### AiServicesStorage <a name="AiServicesStorage" id="@cdktf/provider-azurerm.aiServices.AiServicesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesStorage.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesStorage: aiServices.AiServicesStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#storage_account_id AiServices#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage.property.identityClientId">identityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_client_id AiServices#identity_client_id}. |

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.aiServices.AiServicesStorage.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#storage_account_id AiServices#storage_account_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesStorage.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#identity_client_id AiServices#identity_client_id}.

---

### AiServicesTimeouts <a name="AiServicesTimeouts" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

const aiServicesTimeouts: aiServices.AiServicesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#create AiServices#create}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#delete AiServices#delete}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#read AiServices#read}. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#update AiServices#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#create AiServices#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#delete AiServices#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#read AiServices#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/ai_services#update AiServices#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiServicesCustomerManagedKeyOutputReference <a name="AiServicesCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesCustomerManagedKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetManagedHsmKeyId">resetManagedHsmKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetIdentityClientId"></a>

```typescript
public resetIdentityClientId(): void
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetKeyVaultKeyId"></a>

```typescript
public resetKeyVaultKeyId(): void
```

##### `resetManagedHsmKeyId` <a name="resetManagedHsmKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.resetManagedHsmKeyId"></a>

```typescript
public resetManagedHsmKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput">managedHsmKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.managedHsmKeyId">managedHsmKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.identityClientIdInput"></a>

```typescript
public readonly identityClientIdInput: string;
```

- *Type:* string

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```typescript
public readonly keyVaultKeyIdInput: string;
```

- *Type:* string

---

##### `managedHsmKeyIdInput`<sup>Optional</sup> <a name="managedHsmKeyIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.managedHsmKeyIdInput"></a>

```typescript
public readonly managedHsmKeyIdInput: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```typescript
public readonly keyVaultKeyId: string;
```

- *Type:* string

---

##### `managedHsmKeyId`<sup>Required</sup> <a name="managedHsmKeyId" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.managedHsmKeyId"></a>

```typescript
public readonly managedHsmKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiServicesCustomerManagedKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesCustomerManagedKey">AiServicesCustomerManagedKey</a>

---


### AiServicesIdentityOutputReference <a name="AiServicesIdentityOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiServicesIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesIdentity">AiServicesIdentity</a>

---


### AiServicesNetworkAclsOutputReference <a name="AiServicesNetworkAclsOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesNetworkAclsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.putVirtualNetworkRules">putVirtualNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetBypass">resetBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetVirtualNetworkRules">resetVirtualNetworkRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualNetworkRules` <a name="putVirtualNetworkRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.putVirtualNetworkRules"></a>

```typescript
public putVirtualNetworkRules(value: IResolvable | AiServicesNetworkAclsVirtualNetworkRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.putVirtualNetworkRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]

---

##### `resetBypass` <a name="resetBypass" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetBypass"></a>

```typescript
public resetBypass(): void
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetIpRules"></a>

```typescript
public resetIpRules(): void
```

##### `resetVirtualNetworkRules` <a name="resetVirtualNetworkRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.resetVirtualNetworkRules"></a>

```typescript
public resetVirtualNetworkRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList">AiServicesNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.bypassInput">bypassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.virtualNetworkRulesInput">virtualNetworkRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNetworkRules`<sup>Required</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```typescript
public readonly virtualNetworkRules: AiServicesNetworkAclsVirtualNetworkRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList">AiServicesNetworkAclsVirtualNetworkRulesList</a>

---

##### `bypassInput`<sup>Optional</sup> <a name="bypassInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.bypassInput"></a>

```typescript
public readonly bypassInput: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.ipRulesInput"></a>

```typescript
public readonly ipRulesInput: string[];
```

- *Type:* string[]

---

##### `virtualNetworkRulesInput`<sup>Optional</sup> <a name="virtualNetworkRulesInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.virtualNetworkRulesInput"></a>

```typescript
public readonly virtualNetworkRulesInput: IResolvable | AiServicesNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.bypass"></a>

```typescript
public readonly bypass: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiServicesNetworkAcls;
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAcls">AiServicesNetworkAcls</a>

---


### AiServicesNetworkAclsVirtualNetworkRulesList <a name="AiServicesNetworkAclsVirtualNetworkRulesList" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesNetworkAclsVirtualNetworkRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.get"></a>

```typescript
public get(index: number): AiServicesNetworkAclsVirtualNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiServicesNetworkAclsVirtualNetworkRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>[]

---


### AiServicesNetworkAclsVirtualNetworkRulesOutputReference <a name="AiServicesNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```typescript
public resetIgnoreMissingVnetServiceEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```typescript
public readonly ignoreMissingVnetServiceEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiServicesNetworkAclsVirtualNetworkRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesNetworkAclsVirtualNetworkRules">AiServicesNetworkAclsVirtualNetworkRules</a>

---


### AiServicesStorageList <a name="AiServicesStorageList" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.get"></a>

```typescript
public get(index: number): AiServicesStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiServicesStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>[]

---


### AiServicesStorageOutputReference <a name="AiServicesStorageOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.resetIdentityClientId"></a>

```typescript
public resetIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.identityClientIdInput"></a>

```typescript
public readonly identityClientIdInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiServicesStorage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesStorage">AiServicesStorage</a>

---


### AiServicesTimeoutsOutputReference <a name="AiServicesTimeoutsOutputReference" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.Initializer"></a>

```typescript
import { aiServices } from '@cdktf/provider-azurerm'

new aiServices.AiServicesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.aiServices.AiServicesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiServicesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.aiServices.AiServicesTimeouts">AiServicesTimeouts</a>

---



