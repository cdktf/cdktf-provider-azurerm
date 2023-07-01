# `data_azurerm_billing_enrollment_account_scope`

Refer to the Terraform Registory for docs: [`data_azurerm_billing_enrollment_account_scope`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope).

# `dataAzurermBillingEnrollmentAccountScope` Submodule <a name="`dataAzurermBillingEnrollmentAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingEnrollmentAccountScope <a name="DataAzurermBillingEnrollmentAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope azurerm_billing_enrollment_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

new dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope(scope: Construct, id: string, config: DataAzurermBillingEnrollmentAccountScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermBillingEnrollmentAccountScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput">billingAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput">enrollmentAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName">billingAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName">enrollmentAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a>

---

##### `billingAccountNameInput`<sup>Optional</sup> <a name="billingAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput"></a>

```typescript
public readonly billingAccountNameInput: string;
```

- *Type:* string

---

##### `enrollmentAccountNameInput`<sup>Optional</sup> <a name="enrollmentAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput"></a>

```typescript
public readonly enrollmentAccountNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermBillingEnrollmentAccountScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName"></a>

```typescript
public readonly billingAccountName: string;
```

- *Type:* string

---

##### `enrollmentAccountName`<sup>Required</sup> <a name="enrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName"></a>

```typescript
public readonly enrollmentAccountName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingEnrollmentAccountScopeConfig <a name="DataAzurermBillingEnrollmentAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.Initializer"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

const dataAzurermBillingEnrollmentAccountScopeConfig: dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName">billingAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName">enrollmentAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccountName`<sup>Required</sup> <a name="billingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName"></a>

```typescript
public readonly billingAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}.

---

##### `enrollmentAccountName`<sup>Required</sup> <a name="enrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName"></a>

```typescript
public readonly enrollmentAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermBillingEnrollmentAccountScopeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#timeouts DataAzurermBillingEnrollmentAccountScope#timeouts}

---

### DataAzurermBillingEnrollmentAccountScopeTimeouts <a name="DataAzurermBillingEnrollmentAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.Initializer"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

const dataAzurermBillingEnrollmentAccountScopeTimeouts: dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermBillingEnrollmentAccountScope } from '@cdktf/provider-azurerm'

new dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermBillingEnrollmentAccountScopeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

---



