# `azurerm_api_management_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_api_management_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain).

# `apiManagementCustomDomain` Submodule <a name="`apiManagementCustomDomain` Submodule" id="@cdktf/provider-azurerm.apiManagementCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementCustomDomain <a name="ApiManagementCustomDomain" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain azurerm_api_management_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomain(scope: Construct, id: string, config: ApiManagementCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig">ApiManagementCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig">ApiManagementCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal">putDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway">putGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal">putPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm">putScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal">resetDeveloperPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal">resetPortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm">resetScm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDeveloperPortal` <a name="putDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal"></a>

```typescript
public putDeveloperPortal(value: IResolvable | ApiManagementCustomDomainDeveloperPortal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putDeveloperPortal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]

---

##### `putGateway` <a name="putGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway"></a>

```typescript
public putGateway(value: IResolvable | ApiManagementCustomDomainGateway[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putGateway.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement"></a>

```typescript
public putManagement(value: IResolvable | ApiManagementCustomDomainManagement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putManagement.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]

---

##### `putPortal` <a name="putPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal"></a>

```typescript
public putPortal(value: IResolvable | ApiManagementCustomDomainPortal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putPortal.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]

---

##### `putScm` <a name="putScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm"></a>

```typescript
public putScm(value: IResolvable | ApiManagementCustomDomainScm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putScm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementCustomDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---

##### `resetDeveloperPortal` <a name="resetDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetDeveloperPortal"></a>

```typescript
public resetDeveloperPortal(): void
```

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetGateway"></a>

```typescript
public resetGateway(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetPortal` <a name="resetPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetPortal"></a>

```typescript
public resetPortal(): void
```

##### `resetScm` <a name="resetScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetScm"></a>

```typescript
public resetScm(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApiManagementCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal">developerPortal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway">gateway</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management">management</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal">portal</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm">scm</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput">developerPortalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput">gatewayInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput">managementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput">portalInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput">scmInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `developerPortal`<sup>Required</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortal"></a>

```typescript
public readonly developerPortal: ApiManagementCustomDomainDeveloperPortalList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList">ApiManagementCustomDomainDeveloperPortalList</a>

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gateway"></a>

```typescript
public readonly gateway: ApiManagementCustomDomainGatewayList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList">ApiManagementCustomDomainGatewayList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.management"></a>

```typescript
public readonly management: ApiManagementCustomDomainManagementList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList">ApiManagementCustomDomainManagementList</a>

---

##### `portal`<sup>Required</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portal"></a>

```typescript
public readonly portal: ApiManagementCustomDomainPortalList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList">ApiManagementCustomDomainPortalList</a>

---

##### `scm`<sup>Required</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scm"></a>

```typescript
public readonly scm: ApiManagementCustomDomainScmList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList">ApiManagementCustomDomainScmList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementCustomDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference">ApiManagementCustomDomainTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementIdInput"></a>

```typescript
public readonly apiManagementIdInput: string;
```

- *Type:* string

---

##### `developerPortalInput`<sup>Optional</sup> <a name="developerPortalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.developerPortalInput"></a>

```typescript
public readonly developerPortalInput: IResolvable | ApiManagementCustomDomainDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: IResolvable | ApiManagementCustomDomainGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.managementInput"></a>

```typescript
public readonly managementInput: IResolvable | ApiManagementCustomDomainManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]

---

##### `portalInput`<sup>Optional</sup> <a name="portalInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.portalInput"></a>

```typescript
public readonly portalInput: IResolvable | ApiManagementCustomDomainPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]

---

##### `scmInput`<sup>Optional</sup> <a name="scmInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.scmInput"></a>

```typescript
public readonly scmInput: IResolvable | ApiManagementCustomDomainScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementCustomDomainConfig <a name="ApiManagementCustomDomainConfig" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainConfig: apiManagementCustomDomain.ApiManagementCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal">developerPortal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]</code> | developer_portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway">gateway</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]</code> | gateway block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management">management</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]</code> | management block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal">portal</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]</code> | portal block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm">scm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]</code> | scm block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#api_management_id ApiManagementCustomDomain#api_management_id}.

---

##### `developerPortal`<sup>Optional</sup> <a name="developerPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.developerPortal"></a>

```typescript
public readonly developerPortal: IResolvable | ApiManagementCustomDomainDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]

developer_portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#developer_portal ApiManagementCustomDomain#developer_portal}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.gateway"></a>

```typescript
public readonly gateway: IResolvable | ApiManagementCustomDomainGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]

gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#gateway ApiManagementCustomDomain#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#id ApiManagementCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.management"></a>

```typescript
public readonly management: IResolvable | ApiManagementCustomDomainManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#management ApiManagementCustomDomain#management}

---

##### `portal`<sup>Optional</sup> <a name="portal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.portal"></a>

```typescript
public readonly portal: IResolvable | ApiManagementCustomDomainPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]

portal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#portal ApiManagementCustomDomain#portal}

---

##### `scm`<sup>Optional</sup> <a name="scm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.scm"></a>

```typescript
public readonly scm: IResolvable | ApiManagementCustomDomainScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]

scm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#scm ApiManagementCustomDomain#scm}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementCustomDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#timeouts ApiManagementCustomDomain#timeouts}

---

### ApiManagementCustomDomainDeveloperPortal <a name="ApiManagementCustomDomainDeveloperPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainDeveloperPortal: apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainGateway <a name="ApiManagementCustomDomainGateway" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainGateway: apiManagementCustomDomain.ApiManagementCustomDomainGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding">defaultSslBinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `defaultSslBinding`<sup>Optional</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.defaultSslBinding"></a>

```typescript
public readonly defaultSslBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#default_ssl_binding ApiManagementCustomDomain#default_ssl_binding}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainManagement <a name="ApiManagementCustomDomainManagement" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainManagement: apiManagementCustomDomain.ApiManagementCustomDomainManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainPortal <a name="ApiManagementCustomDomainPortal" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainPortal: apiManagementCustomDomain.ApiManagementCustomDomainPortal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainScm <a name="ApiManagementCustomDomainScm" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainScm: apiManagementCustomDomain.ApiManagementCustomDomainScm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#host_name ApiManagementCustomDomain#host_name}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate ApiManagementCustomDomain#certificate}.

---

##### `certificatePassword`<sup>Optional</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#certificate_password ApiManagementCustomDomain#certificate_password}.

---

##### `keyVaultId`<sup>Optional</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#key_vault_id ApiManagementCustomDomain#key_vault_id}.

---

##### `negotiateClientCertificate`<sup>Optional</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#negotiate_client_certificate ApiManagementCustomDomain#negotiate_client_certificate}.

---

##### `sslKeyvaultIdentityClientId`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#ssl_keyvault_identity_client_id ApiManagementCustomDomain#ssl_keyvault_identity_client_id}.

---

### ApiManagementCustomDomainTimeouts <a name="ApiManagementCustomDomainTimeouts" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

const apiManagementCustomDomainTimeouts: apiManagementCustomDomain.ApiManagementCustomDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#create ApiManagementCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#delete ApiManagementCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#read ApiManagementCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/api_management_custom_domain#update ApiManagementCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementCustomDomainDeveloperPortalList <a name="ApiManagementCustomDomainDeveloperPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get"></a>

```typescript
public get(index: number): ApiManagementCustomDomainDeveloperPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainDeveloperPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>[]

---


### ApiManagementCustomDomainDeveloperPortalOutputReference <a name="ApiManagementCustomDomainDeveloperPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainDeveloperPortal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainDeveloperPortal">ApiManagementCustomDomainDeveloperPortal</a>

---


### ApiManagementCustomDomainGatewayList <a name="ApiManagementCustomDomainGatewayList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get"></a>

```typescript
public get(index: number): ApiManagementCustomDomainGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>[]

---


### ApiManagementCustomDomainGatewayOutputReference <a name="ApiManagementCustomDomainGatewayOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding">resetDefaultSslBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetDefaultSslBinding` <a name="resetDefaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetDefaultSslBinding"></a>

```typescript
public resetDefaultSslBinding(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput">defaultSslBindingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding">defaultSslBinding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `defaultSslBindingInput`<sup>Optional</sup> <a name="defaultSslBindingInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBindingInput"></a>

```typescript
public readonly defaultSslBindingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `defaultSslBinding`<sup>Required</sup> <a name="defaultSslBinding" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.defaultSslBinding"></a>

```typescript
public readonly defaultSslBinding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainGateway;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainGateway">ApiManagementCustomDomainGateway</a>

---


### ApiManagementCustomDomainManagementList <a name="ApiManagementCustomDomainManagementList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainManagementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get"></a>

```typescript
public get(index: number): ApiManagementCustomDomainManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainManagement[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>[]

---


### ApiManagementCustomDomainManagementOutputReference <a name="ApiManagementCustomDomainManagementOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainManagement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainManagement">ApiManagementCustomDomainManagement</a>

---


### ApiManagementCustomDomainPortalList <a name="ApiManagementCustomDomainPortalList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainPortalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get"></a>

```typescript
public get(index: number): ApiManagementCustomDomainPortalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainPortal[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>[]

---


### ApiManagementCustomDomainPortalOutputReference <a name="ApiManagementCustomDomainPortalOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainPortal;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainPortal">ApiManagementCustomDomainPortal</a>

---


### ApiManagementCustomDomainScmList <a name="ApiManagementCustomDomainScmList" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainScmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get"></a>

```typescript
public get(index: number): ApiManagementCustomDomainScmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainScm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>[]

---


### ApiManagementCustomDomainScmOutputReference <a name="ApiManagementCustomDomainScmOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword">resetCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId">resetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate">resetNegotiateClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId">resetSslKeyvaultIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetCertificatePassword` <a name="resetCertificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetCertificatePassword"></a>

```typescript
public resetCertificatePassword(): void
```

##### `resetKeyVaultId` <a name="resetKeyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetKeyVaultId"></a>

```typescript
public resetKeyVaultId(): void
```

##### `resetNegotiateClientCertificate` <a name="resetNegotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetNegotiateClientCertificate"></a>

```typescript
public resetNegotiateClientCertificate(): void
```

##### `resetSslKeyvaultIdentityClientId` <a name="resetSslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.resetSslKeyvaultIdentityClientId"></a>

```typescript
public resetSslKeyvaultIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource">certificateSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus">certificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry">expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput">certificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput">negotiateClientCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput">sslKeyvaultIdentityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword">certificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate">negotiateClientCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId">sslKeyvaultIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateSource"></a>

```typescript
public readonly certificateSource: string;
```

- *Type:* string

---

##### `certificateStatus`<sup>Required</sup> <a name="certificateStatus" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateStatus"></a>

```typescript
public readonly certificateStatus: string;
```

- *Type:* string

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.expiry"></a>

```typescript
public readonly expiry: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `certificatePasswordInput`<sup>Optional</sup> <a name="certificatePasswordInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePasswordInput"></a>

```typescript
public readonly certificatePasswordInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `negotiateClientCertificateInput`<sup>Optional</sup> <a name="negotiateClientCertificateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificateInput"></a>

```typescript
public readonly negotiateClientCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientIdInput`<sup>Optional</sup> <a name="sslKeyvaultIdentityClientIdInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientIdInput"></a>

```typescript
public readonly sslKeyvaultIdentityClientIdInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificatePassword`<sup>Required</sup> <a name="certificatePassword" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.certificatePassword"></a>

```typescript
public readonly certificatePassword: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `negotiateClientCertificate`<sup>Required</sup> <a name="negotiateClientCertificate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.negotiateClientCertificate"></a>

```typescript
public readonly negotiateClientCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslKeyvaultIdentityClientId`<sup>Required</sup> <a name="sslKeyvaultIdentityClientId" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.sslKeyvaultIdentityClientId"></a>

```typescript
public readonly sslKeyvaultIdentityClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainScm;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainScm">ApiManagementCustomDomainScm</a>

---


### ApiManagementCustomDomainTimeoutsOutputReference <a name="ApiManagementCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementCustomDomain } from '@cdktf/provider-azurerm'

new apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementCustomDomain.ApiManagementCustomDomainTimeouts">ApiManagementCustomDomainTimeouts</a>

---



